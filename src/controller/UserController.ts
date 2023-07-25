import { Request, Response } from "express";
import User from "../database/database-schemas/User";

class UserController {

    async find(req: Request, res: Response){
        try {
            const users = await User.find();
            return res.json(users);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: "Something wrong happened, try again",
                message: error
            })
        }
    }

    async create(req: Request, res: Response){
        const { name, email, password } = req.body;

        try{
            const userExists = await User.findOne({ email });
            if(userExists){
                return res.status(400).json({
                    error: "Ooops",
                    message: "User already exists"
                })
            }
            const user = await User.create({
                name,
                email,
                password
            });
            return res.json(user);

        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: "Registration failed",
                message: error
            })
        }
    }
}

export default new UserController;