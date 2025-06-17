// File: backend1/src/routes/userRoutes.ts
// This file defines the routes related to user operations in an Express application.
// It imports the necessary modules, including the user controller and Clerk middleware for authentication.
// The routes include user creation and retrieval, both of which are protected by Clerk's authentication middleware
// to ensure that only authenticated users can access these endpoints. The routes are defined using the Express Router,
// which allows for modular route handling in the application. The userController contains the logic for handling
// the requests, such as adding a new user or retrieving user information by ID. This file
// is part of the backend1/src/routes directory, which organizes the application's routing logic.
import { Router } from "express";
import * as userController from "../controllers/userController";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = Router();

// Protect user creation route with Clerk middleware
router.post("/", ClerkExpressRequireAuth(), userController.addUser);
router.get("/", ClerkExpressRequireAuth(), userController.getUserById);

export default router;
