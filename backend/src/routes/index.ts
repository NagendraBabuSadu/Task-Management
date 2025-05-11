import express from "express";
import authRoutes from "./auth.routes";
import taskRoutes from "./task.routes";
import projectRoutes from "./project.routes";
import notificationRoutes from "./notifications.routes";

const router = express.Router();


// API Routes
router.use("/api/auth", authRoutes);
router.use("/api/tasks", taskRoutes);
router.use("/api/projects", projectRoutes);
router.use("/api/notifications", notificationRoutes);

export default router;
