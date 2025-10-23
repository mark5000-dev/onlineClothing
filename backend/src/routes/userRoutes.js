import express from 'express';
import { authMiddleware, adminMiddleware } from '../auth/authMiddleware.js';
import userModel from "../models/userModel.js"

const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
    const users = await userModel.find({});
    console.log(users);
    res.status(201).json({users: users});
});

export default router;
