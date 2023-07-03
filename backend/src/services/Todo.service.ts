import { ServiceResponse } from '../types/ServiceResponse';
import TodoModel, { TodoSequelizeModel } from '../database/models/Todo.model';
import { Todo } from '../types/Todo';
import TodoShemaFields from './validations/Schema';

async function getAllTasks(): Promise< ServiceResponse < TodoSequelizeModel[]>> {
  const tasks = await TodoModel.findAll();
  console.log('tasks: ', tasks);  
  if (!tasks) return { status: 'NOT_FOUND', data: { message: 'Notas não encontradas' } };
  return { status: 'SUCCESSFUL', data: tasks };
}

async function createTask(task: Todo): Promise< ServiceResponse < TodoSequelizeModel>> {
  const { error } = TodoShemaFields.validate(task);
  if (error) return { status: 'REQUIRED_FIELD', data: { message: error.message } };
  const newTask = await TodoModel.create(task);
  if (!newTask) return { status: 'INVALID_DATA', data: { message: 'Erro ao criar nota' } };
  return { status: 'CREATED', data: newTask };
}

async function updateTask(id:number, task: Todo): Promise< ServiceResponse < TodoSequelizeModel>> {
  const { error } = TodoShemaFields.validate(task);
  if (error) return { status: 'REQUIRED_FIELD', data: { message: error.message } };
  const updated = await TodoModel.update(task, { where: { id } });
  if (!updated) return { status: 'INVALID_DATA', data: { message: 'Erro ao atualizar nota' } };
  return { status: 'SUCCESSFUL', data: { message: 'nota atualizada com sucesso' } };
}

async function deleteTask(id:number): Promise< ServiceResponse < TodoSequelizeModel>> {
  const deleted = await TodoModel.destroy({ where: { id } }); 
  const err = !deleted || deleted === 0;
  if (err) return { status: 'INVALID_DATA', data: { message: 'Erro ao deletar tarefa' } };
  return { status: 'DELETED', data: { message: 'Tarefa deletada com sucesso' } };
}

export default { getAllTasks, createTask, updateTask, deleteTask };