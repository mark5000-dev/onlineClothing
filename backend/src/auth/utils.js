import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

export const createAcessToken = (user) => {
    return jwt.sign({ id: user.__id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
}

export const refreshAccessToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const newToken = jwt.sign({ id: decoded.id, email: decoded.email }, JWT_SECRET, { expiresIn: '1h' });
        return newToken;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};


