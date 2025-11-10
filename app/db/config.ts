import { column, defineDb, defineTable, NOW } from 'astro:db';

// Lead Tracking Table - Type-safe persistence
const Leads = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    name: column.text({ optional: true }),
    phone: column.text({ optional: true }),
    company: column.text({ optional: true }),
    source: column.text(), // TikTok, LinkedIn, Instagram, Direct, etc.
    campaign: column.text({ optional: true }), // UTM campaign parameter
    score: column.number({ default: 0 }), // Auto Lead-Scoring (0-100)
    status: column.text({ default: 'new' }), // new, contacted, qualified, converted, lost
    notes: column.text({ optional: true }),
    createdAt: column.date({ default: NOW }),
    lastContactedAt: column.date({ optional: true }),
    convertedAt: column.date({ optional: true }),
    estimatedValue: column.number({ optional: true }), // Revenue potential in EUR
  },
  indexes: {
    emailIdx: { on: ['email'], unique: true },
    sourceIdx: { on: ['source'] },
    scoreIdx: { on: ['score'] },
    statusIdx: { on: ['status'] },
  },
});

// Lead Activities - Track all interactions
const LeadActivities = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    leadId: column.number({ references: () => Leads.columns.id }),
    activityType: column.text(), // page_view, pricing_view, video_watch, form_submit, etc.
    activityData: column.json({ optional: true }), // Additional context
    scoreChange: column.number({ default: 0 }), // How much this activity changed the score
    createdAt: column.date({ default: NOW }),
  },
  indexes: {
    leadIdIdx: { on: ['leadId'] },
    typeIdx: { on: ['activityType'] },
  },
});

// Landing Page Analytics
const PageViews = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    page: column.text(),
    sessionId: column.text(),
    referrer: column.text({ optional: true }),
    userAgent: column.text({ optional: true }),
    country: column.text({ optional: true }),
    createdAt: column.date({ default: NOW }),
  },
  indexes: {
    pageIdx: { on: ['page'] },
    sessionIdx: { on: ['sessionId'] },
  },
});

// A/B Test Experiments
const Experiments = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    variant: column.text(), // control, variant_a, variant_b, etc.
    sessionId: column.text(),
    converted: column.boolean({ default: false }),
    conversionValue: column.number({ optional: true }),
    createdAt: column.date({ default: NOW }),
  },
  indexes: {
    nameIdx: { on: ['name'] },
    sessionIdx: { on: ['sessionId'] },
  },
});

export default defineDb({
  tables: {
    Leads,
    LeadActivities,
    PageViews,
    Experiments,
  },
});
