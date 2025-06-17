// backend1/src/routes/index.ts
// This file sets up the main routing for the Express application by importing user-related routes
// and applying them to the `/api/users` endpoint. It uses the Express Router to modularize the routes,
// making it easier to manage and maintain the codebase.
import { Router } from 'express';

import userRoutes from './userRoutes';

const router = Router();

router.use('/api/users', userRoutes);

export default router;
