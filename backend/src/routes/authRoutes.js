import { Router } from "express";
import { signup, login, refresh, logout } from "../auth/authcontroller";


const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
