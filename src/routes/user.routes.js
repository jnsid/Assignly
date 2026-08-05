import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "User route is working 🚀",
    });
});

router.post("/register", registerUser);

export default router;