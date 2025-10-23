import Mongoose from 'mongoose';

// Keep the user model fields aligned with the auth controller: `name` and `password` (stored hashed).
const userSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // store the hashed password in `password` to match controller usage
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    cart: [
        {
            productId: { type: Mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 1 }
        }
    ]
});

const userModel = Mongoose.model('User', userSchema);
export default userModel;
