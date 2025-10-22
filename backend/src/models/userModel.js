import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    cart: [{
        productId: {type: Mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        quantity: {type: Number, required: true, min: 1}
    }]

});

const userModel = Mongoose.model('User', userSchema);
export default userModel;
