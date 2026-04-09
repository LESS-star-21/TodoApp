import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes';
import taskRoutes from './modules/tasks/task.routes';
import usersRoutes from './modules/users/users.routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth',  authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', usersRoutes);

export default app;