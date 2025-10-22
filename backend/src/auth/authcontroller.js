import { createAcessToken, verifyToken, refreshAccessToken } from "./utils";
import bycrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (userModel, userData) => {
    const existingUser = await userModel.findOne({email: userData.email});
    if (existingUser) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new userModel({...userData, password: hashedPassword});
    await newUser.save();

};

export const login = async (userModel, userData) => {
    const user = await userModel.findOne({email: userData.email});
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    const token = createAcessToken(user);
    return { token, user};
}

export const refresh = async (token) => {
    const newToken = refreshAccessToken(token);
    return newToken;
}

