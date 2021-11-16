import express from 'express';
import {
    getAllProducts, 
    createProduct, 
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/Product.js';

const router = express.Router();

router.get('/', getAllProducts);

router.post("/", createProduct);

router.get("/:id", getProductById);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;