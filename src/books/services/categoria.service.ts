import categoriaModel from '../schemas/categoria.schema'
import { categoriaType } from '../types/categoria.type'

class categoriaService {

    async create(categoria: categoriaType) {
        const createdCategoria = await categoriaModel.create(categoria)
        return createdCategoria
    }

    async findAll() {
        const findedCategorias = await categoriaModel.find()
        return findedCategorias
    }

    async findById(id: string) {
        const findedCategoria = await categoriaModel.findById(id)
        return findedCategoria
    }

    async update(id: string, categoria: categoriaType) {
        const updatedCategoria = await categoriaModel.findByIdAndUpdate(id, {
            name: categoria.name,
            color: categoria.color
        }, { new: true })

        return updatedCategoria
    }

    async delete(id: string) {
        try {
            await categoriaModel.findByIdAndDelete(id)
            return "Categoria removida com sucesso."
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a categoria: ${error}`)
        }
    }

}

export default new categoriaService()