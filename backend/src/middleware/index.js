import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authheader= req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authheader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    }
    else {
        return res.status(403).json({ message: "Access denied" });
    }
};
