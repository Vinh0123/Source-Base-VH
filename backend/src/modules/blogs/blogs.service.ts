import { prisma } from "../../config/database";
import { PageOptionsDto } from "../../common/dtos/page-option.dto";

export class BlogsService {
  async create(title: string, content: string) {
    return prisma.blog.create({ data: { title, content } });
  }

  async findAll(pageOptions: PageOptionsDto) {
    const [items, total] = await Promise.all([
      prisma.blog.findMany({
        skip: pageOptions.skip,
        take: pageOptions.limit,
        orderBy: { createdAt: "desc" }
      }),
      prisma.blog.count()
    ]);

    return { items, total };
  }
}