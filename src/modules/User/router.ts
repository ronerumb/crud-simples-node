import { Router } from "express";
import { userController } from "./controller/UserController";




const router: Router = Router();



const baseUrl = '/user';

router.post(`${baseUrl}`,userController.create);



export const userRouter = router;