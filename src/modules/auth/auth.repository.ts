import { User } from './auth.model';

export const findUserByEmail = (email: string) =>
  User.findOne({ email });

export const createUser = (name: string, email: string, password: string) =>
  User.create({ name, email, password });