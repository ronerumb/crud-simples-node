import { PrismaClient } from "@prisma/client";




class UserService {

    public async create(name: string, email: string, password: string) {
        const prismaConnect = new PrismaClient();
        const findUser = await prismaConnect.user.findUnique({
            where: {
                email,
            }
        });

        if (findUser) {
            throw new Error('Usuario já cadastrado')

        }



        const create = await prismaConnect.user.create({
            data: {
                name,
                email,
                password
            },
            select: {
                name: true,
                email: true
            }
        })

        return create;

    }

}

export const userService = new UserService(); 