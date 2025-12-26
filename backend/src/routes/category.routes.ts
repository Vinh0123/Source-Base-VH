import { Router } from "express";
import { CategoriesController } from "../modules/categories/categories.controller";

const router = Router();
const controller = new CategoriesController();

router.post("/", controller.create);
router.get("/", controller.findAll);

export default router;
