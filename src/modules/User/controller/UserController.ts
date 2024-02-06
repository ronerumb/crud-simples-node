import { Request, Response } from 'express';
import {z} from 'zod';

class UserController{

    public async create(req : Request, res: Response){
        const {name,email,password} = req.body;      

        try {
            const validator = z.object({
                name : z.string().min(1,{message : 'Nome é obrigatorio'}),
                email : z.string().email({message : 'Email é obrigatorio'}),
                password : z.string().min(5,'Senha é obrigatoria')
            });
            validator.parse({name,email,password});
            
        } catch (err:any) {
            return res.status(400).json({
                error : err.errors
            })
            
        }
    }
}

export const userController = new UserController();