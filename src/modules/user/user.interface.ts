import { Schema, model, connect } from 'mongoose';

export type UserData = {
    userId: number,
    username: string,
    password: string,
    fullName: {
        firstName: string,
        lastName: string
    },
    age: number,
    email: string,
    isActive: boolean,
    hobbies: string[],

    address: {
        street: string,
        city: string,
        country: string,
    },
    orders: {
        productName: string,
        price: number,
        quantity: number,
    }[]
}

export default UserData;