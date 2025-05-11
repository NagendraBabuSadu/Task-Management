
import express from "express";
import { googleAuthUser, loginUser, logoutUser, refreshTokenUser, registerUser } from "../controllers/auth.controller";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh-token", refreshTokenUser);
router.post("/google", googleAuthUser);


export default router;
