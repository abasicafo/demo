// backend1/src/controllers/userController.ts
// This file contains the user-related controller functions for handling requests to the user API.
// It includes functions to get a user by their Clerk user ID and to add a new user
// using the Clerk user ID from the session. The functions interact with the user service to perform
// the necessary operations and handle errors appropriately.
// and setComments(res.data)
//       .catch((err) => setError(err.response?.data?.error || err.message))
//       .finally(() => setLoading(false));
//   }, [id]);
// 
//   return { comments, loading, error };
// }    
import { NextFunction, Request, Response } from "express";
import * as userService from "../services/userService";

// Get user by Clerk user ID (from params)
export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const clerkUserId = (req as any).auth?.userId;

  userService
    .getUserById(clerkUserId)
    .then((data) => {
      if (data.user) {
        res.json(data);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => next(err));
};

// Add user: always use Clerk user ID from session, not from body
export const addUser = (req: Request, res: Response, next: NextFunction) => {
  // ClerkExpressRequireAuth middleware attaches userId to req.auth.userId
  const clerkUserId = (req as any).auth?.userId;
  const { firstName, lastName } = req.body;

  if (!clerkUserId || !firstName || !lastName) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  userService
    .createUser({ id: clerkUserId, firstName, lastName })
    .then((result) => res.status(201).json(result))
    .catch((err) => next(err));
};
