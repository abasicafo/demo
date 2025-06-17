// backend2/src/controllers/blogController.ts
// This file contains the controller functions for handling blog-related requests in the Express application.
// It imports the necessary modules, including the blog service for business logic and the Express Request and Response types.
// The controller functions include creating a new blog post, retrieving all blog posts, and fetching a specific blog post by its ID.
// Each function handles the request and response, performing validation and error handling as needed.
// The controller functions are designed to be used with Express routes, allowing for modular and organized handling of blog-related operations in the application.
import { Request, Response } from "express";
import * as blogService from "../services/BlogService";

// Helper to get Clerk user ID from middleware/session
function getClerkUserId(req: Request): string | undefined {
  // ClerkExpressRequireAuth middleware attaches userId to req.auth.userId
  return (req as any).auth?.userId;
}

export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const authorId = getClerkUserId(req);

  if (!title || !content || !authorId) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  try {
    const blog = await blogService.createBlogPost(title, content, authorId);
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to create blog" });
  }
};

export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await blogService.listBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const blog = await blogService.findBlogById(id);
    if (!blog) {
      res.status(404).json({ error: "Blog not found" });
      return;
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
};
