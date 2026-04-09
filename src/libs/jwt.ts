import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, ENV.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const verifyToken = (token: string): jwt.JwtPayload => {
  return jwt.verify(token, ENV.JWT_SECRET) as jwt.JwtPayload;
};