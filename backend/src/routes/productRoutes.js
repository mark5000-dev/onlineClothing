import express from 'express';
import productModel from '../models/productsModel.js';
import { authMiddleware } from '../auth/authMiddleware.js';


const router = express.Router();

router.get('/',authMiddleware, async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/',authMiddleware, async(req,res) =>{
    try {
        const product = await productModel.create(req.body);
        const p = await productModel.find({name: req.body.name});
        res.json(p);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


export default router;