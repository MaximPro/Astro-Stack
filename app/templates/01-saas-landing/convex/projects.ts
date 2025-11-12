import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Create a new project
export const createProject = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    userId: v.id('users'),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert('projects', {
      name: args.name,
      description: args.description,
      userId: args.userId,
      status: 'active',
      apiCallsThisMonth: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return projectId;
  },
});

// Get all projects for a user
export const getUserProjects = query({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query('projects')
      .withIndex('by_user', (q) => q.eq('userId', args.userId))
      .order('desc')
      .collect();

    return projects;
  },
});

// Get a single project
export const getProject = query({
  args: { projectId: v.id('projects') },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    return project;
  },
});

// Update project
export const updateProject = mutation({
  args: {
    projectId: v.id('projects'),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    status: v.optional(v.union(v.literal('active'), v.literal('archived'))),
  },
  handler: async (ctx, args) => {
    const { projectId, ...updates } = args;

    await ctx.db.patch(projectId, {
      ...updates,
      updatedAt: Date.now(),
    });
  },
});

// Delete project
export const deleteProject = mutation({
  args: { projectId: v.id('projects') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.projectId);
  },
});

// Increment API call counter
export const incrementApiCalls = mutation({
  args: { projectId: v.id('projects') },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    if (!project) throw new Error('Project not found');

    await ctx.db.patch(args.projectId, {
      apiCallsThisMonth: project.apiCallsThisMonth + 1,
      updatedAt: Date.now(),
    });
  },
});

// Log API usage
export const logApiUsage = mutation({
  args: {
    userId: v.id('users'),
    projectId: v.id('projects'),
    endpoint: v.string(),
    method: v.string(),
    statusCode: v.number(),
    responseTime: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('apiUsage', {
      ...args,
      timestamp: Date.now(),
    });

    // Increment counter
    await ctx.scheduler.runAfter(0, 'projects:incrementApiCalls', {
      projectId: args.projectId,
    });
  },
});
