import { Request, Response } from 'express'
import taskService from "../services/task.service";

class taskController {

    async create(req: Request, res: Response) {
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    async findAll(req: Request, res: Response) {
        const findedTask = await taskService.findAll()
        res.status(202)
        return res.json(findedTask)
    }

    async findById(req: Request, res: Response) {
        const findedTask = await taskService.findById(req.params.id)
        res.status(203)
        return res.json(findedTask)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await taskService.update(req.params.id, req.body)
        res.status(204)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleted = await taskService.delete(req.params.id)
        res.status(205)
        return res.json(deleted)
    }

    //---------------------------------------------------

    async listCompleted(req: Request, res: Response) {
        try {
            const completedTasks = await taskService.findAllCompleted();
            res.status(200).json(completedTasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async filterByCategoria(req: Request, res: Response) {
        try {
            const { categoria } = req.params;
            const tasksFilteredByCategoria = await taskService.findByCategoria(categoria);
            res.status(200).json(tasksFilteredByCategoria);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listPending(req: Request, res: Response) {
        try {
            const pendingTasks = await taskService.findAllPending();
            res.status(200).json(pendingTasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async listDueTasks(req: Request, res: Response) {
        try {
            const { start, end } = req.params;
            const dueTasks = await taskService.findDueTasks(start, end);
            res.status(200).json(dueTasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async countTotalTasksByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const totalTasks = await taskService.countTotalTasksByUser(userId);
            res.status(200).json({ totalTasks });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findMostRecentTaskByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const mostRecentTask = await taskService.findMostRecentTaskByUser(userId);
            res.status(200).json(mostRecentTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async calculateAverageCompletion(req: Request, res: Response) {
        try {
            const averageCompletion = await taskService.calculateAverageCompletion();
            res.status(200).json({ averageCompletion });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findTaskWithLongestDescription(req: Request, res: Response) {
        try {
            const task = await taskService.findTaskWithLongestDescription();
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async groupTasksByCategoria(req: Request, res: Response) {
        try {
            const tasksGroupedByCategoria = await taskService.groupTasksByCategoria();
            res.status(200).json(tasksGroupedByCategoria);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findOldestTaskByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const oldestTask = await taskService.findOldestTaskByUser(userId);
            res.status(200).json(oldestTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default new taskController()