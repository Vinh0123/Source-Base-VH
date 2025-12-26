import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";
import { successResponse } from "../../utils/response";
import { PrismaService } from "../../prisma/prisma.service";

const prismaService = new PrismaService();
const service = new CategoriesService(prismaService);

export class CategoriesController {
  async create(req: Request, res: Response) {
    const category = await service.create(req.body);
    res.json(successResponse(category));
  }

  async findAll(_req: Request, res: Response) {
    const categories = await service.findAll();
    res.json(successResponse(categories));
  }
}
