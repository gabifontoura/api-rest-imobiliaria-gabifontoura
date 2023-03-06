import { Request, Response, NextFunction } from "express";

export const ensurePermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    
    if (req.user.id === parseInt(req.params.id) || req.user.admin) {
      next();
    } else {
      res.status(403).json({ message: 'Insufficient Permission' });
    }
  }