import taskModel from '../schemas/task.schema'
import { taskType } from '../types/task.type'

class taskService {

    async create(task: taskType) {
        const createdTask = await taskModel.create(task)
        return createdTask
    }

    async findAll() {
        const findedTasks = await taskModel.find()
        return findedTasks
    }

    async findById(id: string) {
        const findedTask = await taskModel.findById(id)
        return findedTask
    }

    async update(id: string, task: taskType) {
        const updatedTask = await taskModel.findByIdAndUpdate(id, {
            titulo: task.titulo,
            descricao: task.descricao,
            criacao: task.criacao,
            tipo: task.tipo,
            status: task.status,
            userAssociado: task.userAssociado,
            conclusao: task.conclusao
        }, { new: true })

        return updatedTask
    }

    async delete(id: string) {
        try {
            await taskModel.findByIdAndDelete(id)
            return "Task removida com sucesso."
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a task: ${error}`)
        }
    }

    //---------------------------------------------------

    async findAllCompleted() {
        try {
            const completedTasks = await taskModel.find({ status: 'concluída' });
            return completedTasks;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar as tasks concluídas: ${error}`);
        }
    }

    async findByCategoria(categoria: string) {
        try {
            const tasksFilteredByCategoria = await taskModel.find({ categoria });
            return tasksFilteredByCategoria;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar as tasks da categoria ${categoria}: ${error}`);
        }
    }

    async findAllPending() {
        try {
            const pendingTasks = await taskModel.find({ status: 'pendente' });
            return pendingTasks;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar as tarefas pendentes: ${error}`);
        }
    }

    async findDueTasks(start: string, end: string) {
        try {
            const dueTasks = await taskModel.find({
                criacao: { $gte: new Date(start), $lte: new Date(end) }
            });
            return dueTasks;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar as tarefas que vencem entre ${start} e ${end}: ${error}`);
        }
    }

    async countTotalTasksByUser(userId: string) {
        try {
            const totalTasks = await taskModel.countDocuments({ userAssociado: userId });
            return totalTasks;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao contar o número total de tarefas do usuário ${userId}: ${error}`);
        }
    }

    async findMostRecentTaskByUser(userId: string) {
        try {
            const mostRecentTask = await taskModel.findOne({ userAssociado: userId }).sort({ criacao: -1 });
            return mostRecentTask;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar a tarefa mais recente do usuário ${userId}: ${error}`);
        }
    }

    async calculateAverageCompletion() {
        try {
            //não sei, não consegui, desculpe.
        } catch (error) {
            throw new Error(`Ocorreu um erro ao calcular a média de conclusão das tarefas: ${error}`);
        }
    }

    async findTaskWithLongestDescription(): Promise<taskType> {
        try {
            const tasks = await taskModel.find({ status: 'concluída' });
            let longestTask: taskType | null = null;
            tasks.forEach(task => {
                const taskData = task.toObject();
                if (!longestTask || (task.descricao && task.descricao.length > longestTask.descricao.length)) {
                    longestTask = taskData as taskType;
                }
            });
            if (!longestTask) {
                throw new Error('Nenhuma tarefa encontrada.');
            }
            return longestTask;
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar a tarefa com a descrição mais longa: ${error}`);
        }
    }

    async groupTasksByCategoria() {
        try {
            //não consegui, desculpa.
        } catch (error) {
            throw new Error(`Ocorreu um erro ao agrupar as tarefas por categoria: ${error}`);
        }
    }

    async findOldestTaskByUser(userId: string): Promise<taskType | null> {
        try {
            const oldestTask = await taskModel.findOne({ userAssociado: userId }).sort({ criacao: 1 });
            if (oldestTask) {
                const taskData = oldestTask.toObject();
                return {
                    titulo: taskData.titulo ?? '',
                    descricao: taskData.descricao ?? '',
                    criacao: taskData.criacao ?? new Date(),
                    tipo: taskData.tipo ?? '',
                    status: taskData.status ?? '',
                    userAssociado: taskData.userAssociado ?? '',
                    conclusao: taskData.conclusao ?? new Date()
                };
            } else {
                return null;
            }
        } catch (error) {
            throw new Error(`Ocorreu um erro ao buscar a tarefa mais antiga do usuário: ${error}`);
        }
    }

}

export default new taskService()