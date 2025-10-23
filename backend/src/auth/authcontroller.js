import { createAccessToken, createRefreshToken, verifyRefreshToken } from "./utils.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Signup: create a new user with hashed password
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ message: 'Missing required fields' });

        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login: validate credentials and issue tokens
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'Missing email or password' });

        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid email or password' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid email or password' });

        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken({ id: user._id, email: user.email, role: user.role });

        // Set refresh token as httpOnly cookie; frontend must use credentials to receive it
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'lax' });
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Refresh: exchange refresh token cookie for a new access token
export const refresh = async (req, res) => {
    try {
        const refreshToken = req.cookies && req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });

        const payload = verifyRefreshToken(refreshToken);
        if (!payload) return res.status(401).json({ message: 'Invalid refresh token' });

        // payload should contain id/email/role
        const accessToken = createAccessToken(payload);
        res.json({ accessToken });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: 'Logout successful' });
};


