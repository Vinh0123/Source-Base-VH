import { Request, Response, NextFunction } from "express";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/request/create-product.dto";
import { GetProductsQueryDto } from "./dto/request/get-products-query.dto";
import { ProductResponseDto } from "./dto/response/product-response.dto";
import { PageMetaDto } from "../../common/dtos/page-meta.dto";
import { ResponsePaginateDto } from "../../common/dtos/response-paginate.dto";

const service = new ProductsService();

export class ProductsController {
  create = async (
    req: Request<{}, {}, CreateProductDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name, price, description, image } = req.body;
      const product = await service.create(name, price, description, image);
      res.json(product);
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
      const pageOptions = Object.assign(
        new GetProductsQueryDto(),
        req.query
      );

      const { items, total } = await service.findAll(pageOptions);

      const data = items.map((p) => new ProductResponseDto(p));
      const meta = new PageMetaDto(
        pageOptions.page,
        pageOptions.limit,
        total
      );
      
      res.json(new ResponsePaginateDto(data, meta));
    } catch (e) {
      next(e);
    }
  };
}
