import { User, IUser } from '../auth/auth.model';

export const findAllUsers = (): Promise<IUser[]> =>
  User.find();

export const findUserById = (id: string): Promise<IUser | null> =>
  User.findById(id);