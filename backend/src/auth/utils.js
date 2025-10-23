import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET

export const createAcessToken = (user) => {
    return jwt.sign({ id: user.__id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
}

export const createRefreshToken = (token) => {
    return jwt.sign(token, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

export const verifyAccessToken = (token) => {
    return jwt.verify(token, JWT_SECRET )
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET )
}