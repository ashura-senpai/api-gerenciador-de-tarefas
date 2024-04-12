import { Router } from 'express'
import userController from './books/controllers/user.controller'
import taskController from './books/controllers/task.controller'
import categoriaController from './books/controllers/categoria.controller'

const routes = Router()

//---------------------------------------------------

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.findById )
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

//---------------------------------------------------

routes.post('/tasks', taskController.create)
routes.get('/tasks', taskController.findAll)
routes.get('/tasks/:id', taskController.findById)
routes.put('/tasks/:id', taskController.update)
routes.delete('/tasks/:id', taskController.delete)
routes.get('/tasks/filter/:categoria', taskController.filterByCategoria)
routes.get('/tasks/completed', taskController.listCompleted)
routes.get('/tasks/pending', taskController.listPending)
routes.get('/tasks/due/:start/:end', taskController.listDueTasks)
routes.get('/tasks/total/:userId', taskController.countTotalTasksByUser)
routes.get('/tasks/recent/:userId', taskController.findMostRecentTaskByUser)
routes.get('/tasks/average-completion', taskController.calculateAverageCompletion) // NÃO CONSEGUI FAZER, DESCULPE.
routes.get('/tasks/longest-description', taskController.findTaskWithLongestDescription)
routes.get('/tasks/group-by-categoria', taskController.groupTasksByCategoria) // NÃO CONSEGUI FAZER, DESCULPE.
routes.get('/tasks/oldest/:userId', taskController.findOldestTaskByUser)

//---------------------------------------------------

routes.post('/categorias', categoriaController.create)
routes.get('/categorias', categoriaController.findAll)
routes.get('/categorias/:id', categoriaController.findById)
routes.put('/categorias/:id', categoriaController.update)
routes.delete('/categorias/:id', categoriaController.delete)

export {
    routes
}