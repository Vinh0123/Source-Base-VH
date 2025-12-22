import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(400).json({
    success: false,
    message: err.message || "Something went wrong"
  });
};
