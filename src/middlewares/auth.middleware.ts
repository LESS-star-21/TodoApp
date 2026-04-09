import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../libs/jwt';

export interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Token requerido' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido o expirado' });
  }
};