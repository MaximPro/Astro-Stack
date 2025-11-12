import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Users table
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    plan: v.union(v.literal('free'), v.literal('pro'), v.literal('enterprise')),
    stripeCustomerId: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_clerk_id', ['clerkId'])
    .index('by_email', ['email']),

  // Projects table
  projects: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    userId: v.id('users'),
    status: v.union(v.literal('active'), v.literal('archived')),
    apiCallsThisMonth: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_status', ['status']),

  // Subscriptions table
  subscriptions: defineTable({
    userId: v.id('users'),
    stripeSubscriptionId: v.string(),
    stripePriceId: v.string(),
    status: v.union(
      v.literal('active'),
      v.literal('canceled'),
      v.literal('past_due'),
      v.literal('trialing')
    ),
    currentPeriodStart: v.number(),
    currentPeriodEnd: v.number(),
    cancelAtPeriodEnd: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_stripe_subscription', ['stripeSubscriptionId']),

  // API Usage table (for analytics)
  apiUsage: defineTable({
    userId: v.id('users'),
    projectId: v.id('projects'),
    endpoint: v.string(),
    method: v.string(),
    statusCode: v.number(),
    responseTime: v.number(),
    timestamp: v.number(),
  })
    .index('by_user', ['userId'])
    .index('by_project', ['projectId'])
    .index('by_timestamp', ['timestamp']),

  // Waitlist table (for pre-launch)
  waitlist: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    referralSource: v.optional(v.string()),
    createdAt: v.number(),
  }).index('by_email', ['email']),

  // Contact form submissions
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    status: v.union(v.literal('new'), v.literal('read'), v.literal('replied')),
    createdAt: v.number(),
  })
    .index('by_email', ['email'])
    .index('by_status', ['status']),
});
