import { Request, Response, NextFunction } from "express";
import { BlogsService } from "./blogs.service";
import { CreateBlogDto } from "./dto/request/create-blog.dto";
import { GetProductsQueryDto } from "../products/dto/request/get-products-query.dto";
import { BlogResponseDto } from "./dto/response/blog-response.dto";
import { PageMetaDto } from "../../common/dtos/page-meta.dto";
import { ResponsePaginateDto } from "../../common/dtos/response-paginate.dto";

const service = new BlogsService();

export class BlogsController {
  create = async (
    req: Request<{}, {}, CreateBlogDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, content } = req.body;
      const blog = await service.create(title, content);
      res.json(blog);
    } catch (e) {
      next(e);
    }
  };

  getAll = async (
    req: Request<{}, {}, {}, GetProductsQueryDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const pageOptions = Object.assign(new GetProductsQueryDto(), req.query);
      const { items, total } = await service.findAll(pageOptions);
      const data = items.map((b) => new BlogResponseDto(b));
      const meta = new PageMetaDto(pageOptions.page, pageOptions.limit, total);
      res.json(new ResponsePaginateDto(data, meta));
    } catch (e) {
      next(e);
    }
  };
}