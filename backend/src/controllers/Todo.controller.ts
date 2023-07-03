import { Request, Response } from 'express';
import TodoService from '../services/Todo.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAllTasks(_req: Request, res: Response) {
  try {
    const { status, data } = await TodoService.getAllTasks();
  
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error('Erro interno ao buscar todas as tarefas: ', error);
  }
}

async function createTask(req: Request, res: Response) {
  try {
    const { status, data } = await TodoService.createTask(req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error('Erro interno ao criar tarefa: ', error);
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { status, data } = await TodoService.updateTask(+id, req.body);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error('Erro interno ao atualizar tarefa: ', error);
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { status } = await TodoService.deleteTask(+id);
    return res.status(mapStatusHTTP(status)).end();
  } catch (error) {
    console.error('Erro interno ao deletar tarefa: ', error);
  }
}

export default { getAllTasks, createTask, updateTask, deleteTask };