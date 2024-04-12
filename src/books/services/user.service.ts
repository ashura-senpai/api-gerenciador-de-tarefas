import userModel from '../schemas/user.schema'
import { userType } from '../types/user.type'

class userService {

    async create(user: userType) {
        const createdUser = await userModel.create(user)
        return createdUser
    }

    async findAll() {
        const findedUsers = await userModel.find()
        return findedUsers
    }

    async findById(id: string) {
        const findedUser = await userModel.findById(id)
        return findedUser
    }

    async update(id: string, user: userType) {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            name: user.name,
            email: user.email,
            senha: user.senha,
            peso: user.peso
        }, { new: true })

        return updatedUser
    }

    async delete(id: string) {
        try {
            await userModel.findByIdAndDelete(id)
            return "Usuário removido com sucesso."
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o usuário: ${error}`)
        }
    }

}

export default new userService()