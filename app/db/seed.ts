import { db, Leads, LeadActivities, Experiments } from 'astro:db';

// Seed function for development
export default async function seed() {
  // Sample leads for testing
  await db.insert(Leads).values([
    {
      email: 'hot.lead@example.com',
      name: 'Max Mustermann',
      phone: '+49 123 456789',
      company: 'Tech Startup GmbH',
      source: 'LinkedIn',
      campaign: 'premium-offer-2024',
      score: 85,
      status: 'qualified',
      estimatedValue: 5000,
      notes: 'Very interested in premium package',
    },
    {
      email: 'warm.lead@example.com',
      name: 'Anna Schmidt',
      source: 'TikTok',
      campaign: 'viral-video-campaign',
      score: 45,
      status: 'contacted',
      estimatedValue: 3000,
    },
    {
      email: 'cold.lead@example.com',
      name: 'Tom Weber',
      source: 'Instagram',
      score: 12,
      status: 'new',
    },
  ]);

  // Sample activities
  await db.insert(LeadActivities).values([
    {
      leadId: 1,
      activityType: 'page_view',
      activityData: { page: '/pricing' },
      scoreChange: 5,
    },
    {
      leadId: 1,
      activityType: 'video_watched_75%',
      activityData: { videoId: 'explainer-video' },
      scoreChange: 10,
    },
    {
      leadId: 1,
      activityType: 'calendly_clicked',
      scoreChange: 15,
    },
  ]);

  // Sample A/B test data
  await db.insert(Experiments).values([
    {
      name: 'hero-headline-test',
      variant: 'control',
      sessionId: 'session-123',
      converted: false,
    },
    {
      name: 'hero-headline-test',
      variant: 'variant_a',
      sessionId: 'session-456',
      converted: true,
      conversionValue: 2997,
    },
  ]);

  console.log('✅ Database seeded successfully!');
}
