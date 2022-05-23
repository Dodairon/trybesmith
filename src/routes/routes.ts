import { Router } from 'express';

import { getAll, postProduct } from '../controller/productsController';
import { midName, midAmount } from '../middlewares/products';

const routes = Router();

routes.get('/products', getAll);
routes.post('/products', midName, midAmount, postProduct);

export default routes;