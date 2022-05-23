import express from "express";
import { login, register, getUsers } from "../controllers/userController.js";
const router = express.Router();

// user table routes
router.post("/register", register);
router.post("/login", login);

export default router;
