// backend1/src/index.ts
// This file is the entry point for the Express application, setting up middleware, routes, and starting the server.
// It imports necessary modules, configures middleware for JSON parsing and CORS, sets up Clerk for authentication,
// and defines the main application routes. It also includes error handling middleware for managing
// not found routes and general errors. Finally, it starts the server on a specified port,
// logging the server's status to the console.
// File: backend1/src/index.ts
// This file is the entry point for the Express application, setting up middleware, routes, and
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';

// Clerk imports
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());

// Clerk middleware: attaches req.auth to all requests
app.use(ClerkExpressWithAuth());

app.use(appRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
