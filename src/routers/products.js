import { Router } from 'express';
import {
  getProductByIdController,
  getProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const productsRouter = Router();

productsRouter.get('/products', ctrlWrapper(getProductController));

productsRouter.get(
  '/products/:productId',
  ctrlWrapper(getProductByIdController),
);

export default productsRouter;
