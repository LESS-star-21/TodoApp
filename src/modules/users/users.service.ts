import { findAllUsers, findUserById } from './users.repository';

export const getUsers = () => findAllUsers();

export const getUserById = (id: string) => findUserById(id);