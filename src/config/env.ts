export const ENV = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://toDo:toDotest@ac-w1qxe8w-shard-00-00.4vodx3w.mongodb.net:27017,ac-w1qxe8w-shard-00-01.4vodx3w.mongodb.net:27017,ac-w1qxe8w-shard-00-02.4vodx3w.mongodb.net:27017/?ssl=true&replicaSet=atlas-4mwnla-shard-0&authSource=admin&appName=Cluster0',
  JWT_SECRET: process.env.JWT_SECRET || 'tu_secreto_super_seguro',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1dS',
};