import * as express from "express";
import { Category } from "../../entities";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
        admin: boolean;
      };
      category: {
        id: number;
      };
    }
  }
}
