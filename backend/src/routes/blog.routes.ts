import { Router } from "express";
import { BlogsController } from "../modules/blogs/blogs.controller";

const router = Router();
const controller = new BlogsController();

router.post("/", controller.create);
router.get("/", controller.getAll);

export default router;