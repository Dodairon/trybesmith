import { Router } from 'express';

import { getAll } from '../controller/productsController';

const routes = Router();

routes.get('/products', getAll);

export default routes;