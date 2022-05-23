import { Products } from '../interface';
import { modelGetAll, modelPostProduct } from '../models/productsModels';

export const ServiceGetAll = async (): Promise<Products[]> => {
  const products = await modelGetAll();
  return products;
};

export const ServicePostProduct = async (name: string, amount: string): Promise<Products> => {
  const products = await modelPostProduct(name, amount);
  return products;
};
