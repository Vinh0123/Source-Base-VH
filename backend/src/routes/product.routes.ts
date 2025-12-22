import { Router } from "express";
import { ProductsController } from "../modules/products/products.controller";

const router = Router();
const controller = new ProductsController();

router.post("/", controller.create);
router.get("/", controller.getAll);

export default router;
