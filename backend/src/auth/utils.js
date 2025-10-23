import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'dev_refresh_secret';

// Create an access token from a user-like object. Use `_id` when available.
export const createAccessToken = (user) => {
    const id = user._id || user.id;
    return jwt.sign({ id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
}

export const createRefreshToken = (payload) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export const verifyAccessToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
}