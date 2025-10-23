import express from 'express';
import { authMiddleware,adminMiddleware } from '../auth/authMiddleware';
import userModel from "../models/userModel"

const router = express.Router();

router.get('/', authMiddleware, adminMiddleware, (req, res) => {
    const users = userModel.find({});
});

export default router;
