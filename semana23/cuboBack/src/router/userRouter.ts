import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router();

const userController = new UserController();

userRouter.post("/create",userController.createUser);

userRouter.get("/all",userController.getAlluser);

