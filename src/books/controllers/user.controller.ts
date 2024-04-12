import { Request, Response } from 'express'
import userService from "../services/user.service";

class userController {
    async create(req: Request, res: Response) {
        const createdUser = await userService.create(req.body)
        res.status(201)
        return res.json(createdUser)
    }

    async findAll(req: Request, res: Response) {
        const findedUser = await userService.findAll()
        res.status(200)
        return res.json(findedUser)
    }

    async findById(req: Request, res: Response) {
        const findedUser = await userService.findById(req.params.id)
        res.status(200)
        return res.json(findedUser)
    }

    async update(req: Request, res: Response) {
        const updatedUser = await userService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedUser)
    }

    async delete(req: Request, res: Response) {
        const deleted = await userService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new userController()