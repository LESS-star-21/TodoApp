import 'dotenv/config';
import app from './app';
import { connectDB } from './config/database';
import { ENV } from './config/env';

const start = async () => {
  await connectDB();
  app.listen(ENV.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${ENV.PORT}`);
  });
};

start();