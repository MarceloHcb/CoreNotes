import express, { Request, Response } from 'express';
import cors from 'cors';
import TodoRouter from './routers/Todo.router';

const app = express();

app.use(express.json());
app.use(cors());
app.use(TodoRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});
export default app;
