import { Router } from "express";
import productRoutes from "./product.routes";
import blogRoutes from "./blog.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/blogs", blogRoutes);

export default router;
