import { Request, Response, NextFunction } from "express";

export const ensureIsAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {

    if (!req.user.admin) {
      res.status(403).json({ message: 'Insufficient permission' });
    } 
    
    return next();
  }