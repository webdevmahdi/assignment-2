import UserData from "./user.interface";
import { User } from "./user.model";

const createUserIntoDb = async (userInput: UserData) => {
    const result = await User.create(userInput);
    return result;
}

export const UserService = {
    createUserIntoDb,
}