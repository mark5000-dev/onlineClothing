import { createAcessToken, verifyToken, createRefreshToken, verifyRefreshToken } from "./utils";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Create a user and return a success message
//The frontend should redirect to the login page
export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await userModel.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({name, email, password: hashedPassword});
        res.status(201).json({ message: 'User created successfully'});
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Check if user exists , check if password is valid , create access and refresh tokens
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const accessToken = createAcessToken(user);
        const refreshToken = createRefreshToken(user);
        res.cookie('refreshToken', refreshToken, {httpOnly: true});
        res.json({ accessToken });
    }
    catch {
        res.status(401).json({ message: error.message });
    }
}

//When access token expires use refresh token to create a new one
export const refresh = async (req,res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ message: 'No refresh token' });
    }
    try {
        const user = verifyRefreshToken(refreshToken);
        if (!user) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }
        const accessToken = createAcessToken(user);
        res.json({ accessToken });
    }
    catch {
        res.status(401).json({ message: error.message });


    }
    
}

export const logout = async (req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: 'Logout successful' });

}


