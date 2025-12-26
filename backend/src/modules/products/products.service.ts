import { prisma } from "../../config/database";
import { PageOptionsDto } from "../../common/dtos/page-option.dto";

export class ProductsService {
  async create(name: string, price: number, description?: string, image?: string) {
    return prisma.product.create({
      data: { name, price, description, image }
    });
  }

  async findAll(pageOptions: PageOptionsDto) {
    const { page, limit } = pageOptions;
    const skip = (page - 1) * limit;

    const items = await prisma.product.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.product.count();

    return { items, total };
  }
}