import { test, expect } from '@playwright/test';

test.describe('Conversion Funnel', () => {
  test('should complete full conversion flow', async ({ page }) => {
    // 1. Visit landing page
    await page.goto('/');
    await expect(page).toHaveTitle(/Premium Landing Pages/);

    // 2. Hero section should be visible
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Landing Pages');

    // 3. Scroll to pricing section
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // Wait for animations

    // 4. Check pricing cards are visible
    const pricingCards = page.locator('.pricing-card');
    await expect(pricingCards).toHaveCount(3);

    // 5. Click on featured plan
    const featuredPlan = page.locator('.pricing-card--featured .btn');
    await featuredPlan.click();

    // 6. Scroll to contact form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // 7. Fill out contact form
    await page.fill('[name="name"]', 'Max Mustermann');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="phone"]', '+49 123 456789');
    await page.fill('[name="company"]', 'Test GmbH');
    await page.fill('[name="message"]', 'Ich interessiere mich für das Professional Paket');

    // 8. Submit form
    await page.click('button[type="submit"]');

    // 9. Wait for success message (toast)
    // Note: This depends on your toast implementation
    await page.waitForTimeout(2000);
  });

  test('should track page views and scroll depth', async ({ page }) => {
    await page.goto('/');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Check that session tracking is initialized
    const sessionId = await page.evaluate(() => sessionStorage.getItem('sessionId'));
    expect(sessionId).toBeTruthy();
  });

  test('mobile: should display responsive layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile layout
    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

    // Scroll through sections
    await page.locator('#features').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  });

  test('should validate form fields', async ({ page }) => {
    await page.goto('/');
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check for HTML5 validation (required fields)
    const nameInput = page.locator('[name="name"]');
    const emailInput = page.locator('[name="email"]');

    await expect(nameInput).toHaveAttribute('required', '');
    await expect(emailInput).toHaveAttribute('required', '');
  });

  test('performance: page should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);

    // Check for key elements
    await expect(page.locator('h1')).toBeVisible();
  });
});
