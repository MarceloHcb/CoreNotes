import { Router } from 'express';
import TodoController from '../controllers/Todo.controller';

const TodoRouter = Router();
TodoRouter.get('/notes', TodoController.getAllTasks);
TodoRouter.post('/notes', TodoController.createTask);
TodoRouter.put('/notes/:id', TodoController.updateTask);
TodoRouter.delete('/notes/:id', TodoController.deleteTask);

export default TodoRouter;
