import { prisma } from "../../config/database";
import { PageOptionsDto } from "../../common/dtos/page-option.dto";

export class ProductsService {
  async create(name: string, price: number, description?: string, image?: string) {
    return prisma.product.create({
      data: { name, price, description, image }
    });
  }

  async findAll(pageOptions: PageOptionsDto) {
    const [items, total] = await Promise.all([
      prisma.product.findMany({
        skip: pageOptions.skip,
        take: pageOptions.limit,
        orderBy: { createdAt: "desc" }
      }),
      prisma.product.count()
    ]);

    return { items, total };
  }
}
