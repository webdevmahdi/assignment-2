import { Schema, model } from "mongoose";
import UserData from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../app/config";

const userSchema = new Schema<UserData>({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: {
        type: [String],
        required: true
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    orders: [
        {
            productName: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
});


userSchema.pre('save', async function(next){
    const user = this
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
    next()
})
userSchema.post('save', function(doc, next){
    doc.password = undefined;
    next();
});



export const UserModel = model<UserData>('User', userSchema)