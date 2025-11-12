import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Get or create user from Clerk
export const syncUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check if user exists
    const existing = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', (q) => q.eq('clerkId', args.clerkId))
      .first();

    if (existing) {
      // Update user info
      await ctx.db.patch(existing._id, {
        email: args.email,
        name: args.name,
        imageUrl: args.imageUrl,
        updatedAt: Date.now(),
      });
      return existing._id;
    }

    // Create new user
    const userId = await ctx.db.insert('users', {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      plan: 'free',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return userId;
  },
});

// Get current user by Clerk ID
export const getCurrentUser = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', (q) => q.eq('clerkId', args.clerkId))
      .first();

    return user;
  },
});

// Update user plan
export const updateUserPlan = mutation({
  args: {
    userId: v.id('users'),
    plan: v.union(v.literal('free'), v.literal('pro'), v.literal('enterprise')),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      plan: args.plan,
      updatedAt: Date.now(),
    });
  },
});

// Get user stats
export const getUserStats = query({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query('projects')
      .withIndex('by_user', (q) => q.eq('userId', args.userId))
      .collect();

    const activeProjects = projects.filter((p) => p.status === 'active').length;
    const totalApiCalls = projects.reduce((sum, p) => sum + p.apiCallsThisMonth, 0);

    return {
      totalProjects: projects.length,
      activeProjects,
      totalApiCalls,
    };
  },
});
