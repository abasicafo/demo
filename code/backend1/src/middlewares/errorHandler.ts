// File: backend1/src/middlewares/errorHandler.ts
// This file contains middleware for handling errors in an Express application.
// It exports a function that takes an error, request, response, and next function as parameters
// and sends a JSON response with the error message and stack trace if not in production.
// backend1/src/middlewares/errorHandler.ts
// This file contains middleware for handling errors in an Express application.
import { NextFunction, Request, Response } from 'express';

/**
 * Middleware to handle errors
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};
