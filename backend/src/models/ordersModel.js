import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    products: [{
        productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        quantity: {type: Number, required: true, min: 1}}],
    totalAmount: {type: Number, required: true, min: 0},
    status: {type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;