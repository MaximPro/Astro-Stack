import type { APIRoute } from 'astro';
import { db, Leads, LeadActivities, eq } from 'astro:db';

// Lead scoring matrix
const SCORE_MAP = {
  'page_view': 1,
  'pricing_view': 5,
  'video_watched_25%': 3,
  'video_watched_50%': 5,
  'video_watched_75%': 8,
  'video_watched_100%': 10,
  'calendly_open': 10,
  'calendly_scheduled': 20,
  'form_started': 5,
  'form_completed': 15,
  'email_opened': 2,
  'email_clicked': 8,
  'download': 7,
  'return_visit': 3,
} as const;

// Source-based initial score
const SOURCE_SCORE = {
  'LinkedIn': 8,
  'TikTok': 5,
  'Instagram': 5,
  'Facebook': 4,
  'Direct': 7,
  'Google': 6,
  'Referral': 9,
} as const;

// POST /api/leads - Create or update lead
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, phone, company, source, campaign, activityType, activityData } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if lead exists
    const existingLead = await db.select().from(Leads).where(eq(Leads.email, email)).get();

    let leadId: number;
    let currentScore = 0;

    if (existingLead) {
      // Update existing lead
      leadId = existingLead.id;
      currentScore = existingLead.score;

      // Update fields if provided
      if (name || phone || company) {
        await db
          .update(Leads)
          .set({
            ...(name && { name }),
            ...(phone && { phone }),
            ...(company && { company }),
          })
          .where(eq(Leads.id, leadId));
      }
    } else {
      // Create new lead
      const initialScore = SOURCE_SCORE[source as keyof typeof SOURCE_SCORE] || 5;

      const result = await db.insert(Leads).values({
        email,
        name: name || null,
        phone: phone || null,
        company: company || null,
        source: source || 'Direct',
        campaign: campaign || null,
        score: initialScore,
        status: 'new',
      });

      leadId = result.lastInsertRowid as number;
      currentScore = initialScore;
    }

    // Track activity if provided
    if (activityType) {
      const scoreChange = SCORE_MAP[activityType as keyof typeof SCORE_MAP] || 0;
      const newScore = Math.min(currentScore + scoreChange, 100); // Cap at 100

      // Insert activity
      await db.insert(LeadActivities).values({
        leadId,
        activityType,
        activityData: activityData ? JSON.stringify(activityData) : null,
        scoreChange,
      });

      // Update lead score
      await db.update(Leads).set({ score: newScore }).where(eq(Leads.id, leadId));

      currentScore = newScore;
    }

    // Determine if hot lead (score > 50)
    const isHotLead = currentScore > 50;

    // TODO: Trigger webhook to n8n if hot lead
    if (isHotLead && process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId,
          email,
          name,
          score: currentScore,
          source,
          campaign,
          timestamp: new Date().toISOString(),
        }),
      }).catch((error) => console.error('Webhook error:', error));
    }

    return new Response(
      JSON.stringify({
        success: true,
        leadId,
        score: currentScore,
        isHotLead,
      }),
      {
        status: existingLead ? 200 : 201,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Lead API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};

// GET /api/leads - Get all leads (admin only)
export const GET: APIRoute = async () => {
  try {
    // TODO: Add authentication check here
    const leads = await db.select().from(Leads).orderBy(Leads.score, 'desc').all();

    return new Response(JSON.stringify({ leads }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Leads fetch error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
