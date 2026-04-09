import { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodRawShape } from 'zod';

export const validate =
  (schema: ZodObject<ZodRawShape>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.flatten().fieldErrors });
      return;
    }
    req.body = result.data;
    next();
  };