import { findUserByEmail, createUser } from './auth.repository';
import { hashPassword, comparePassword } from '../../libs/bcrypt';
import { generateToken } from '../../libs/jwt';

export const registerUser = async (name: string, email: string, password: string) => {
  const exists = await findUserByEmail(email);
  if (exists) throw new Error('El email ya está registrado');

  const hashed = await hashPassword(password);
  const user = await createUser(name, email, hashed);
  return { token: generateToken(user.id), user: { id: user.id, name, email } };
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Credenciales inválidas');

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error('Credenciales inválidas');

  return { token: generateToken(user.id), user: { id: user.id, name: user.name, email } };
};