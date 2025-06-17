// File: backend1/src/middlewares/notFound.ts
// This file contains middleware for handling requests to routes that do not exist in an Express application.
// It exports a function that takes a request, response, and next function as parameters
// and sends a 404 status code with an error message indicating that the route was not found
// backend1/src/middlewares/notFound.ts
import { NextFunction, Request, Response } from 'express';

/**
 * Middleware to handle invalid routes
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
