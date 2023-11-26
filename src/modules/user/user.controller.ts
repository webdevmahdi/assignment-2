import { Request, Response } from "express";
import { UserValidationSchema } from "./user.validation";
import { UserService } from "./user.services";

const createUserController = async (req: Request, res: Response) =>{
    try{
        const userInput = req.body.user;
        const zodValidated = UserValidationSchema.parse(userInput);
        const result = await UserService.createUserIntoDb(zodValidated);
        res.status(200).json({
            success: true,
            message: "User has created successfully",
            data: result
        })
    }
    catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err
        })
    }
}

const getUserController = async (req: Request, res: Response) =>{
    try{
        const result = await UserService.getAllUsersDataFromDb();
        res.status(200).json({
            success: true,
            message: "All users data has retrieved",
            data: result
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "You have provided wrong input",
            error: err,
        })
    }
}

export const UserController = {
    createUserController,
    getUserController,
}