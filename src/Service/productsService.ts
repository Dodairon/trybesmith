import Products from '../interface';
import { modelGetAll } from '../models/productsModels';

export const ServiceGetAll = async (): Promise<Products[]> => {
  const products = await modelGetAll();
  return products;
};

export const getById = async () => {
  const products = await modelGetAll();
  return products;
};
