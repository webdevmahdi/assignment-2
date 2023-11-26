import { Request, Response } from "express";
import UserData from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (userInput: UserData) => {
    const result = await UserModel.create(userInput);
    return result;
}
const getAllUsersDataFromDb = async () => {
    const result = await UserModel.find();
    return result;
}

export const UserService = {
    createUserIntoDb,
    getAllUsersDataFromDb,
}