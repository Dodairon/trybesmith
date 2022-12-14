import { Router } from 'express';

import { getAll, postProduct } from '../controller/productsController';
import postUser from '../controller/usersController';
import { midName, midAmount } from '../middlewares/products';
import { midUsername, midClasse, midLevel, midPassword } from '../middlewares/users';
import getOrder from '../controller/orderController';

const routes = Router();

routes.get('/products', getAll);
routes.post('/products', midName, midAmount, postProduct);
routes.post('/users', midUsername, midClasse, midLevel, midPassword, postUser);
routes.get('/orders', getOrder);

export default routes;