import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ServiceGetAll, ServicePostProduct } from '../Service/productsService';

export const getAll: RequestHandler = async (_req, res) => {
  const products = await ServiceGetAll();
  res.status(StatusCodes.OK).json(products);
};

export const postProduct: RequestHandler = async (req, res) => {
  try {
    const { name, amount } = req.body;
    const products = await ServicePostProduct(name, amount);
    res.status(StatusCodes.CREATED).json(products);    
  } catch (error) {
    console.log(error);
    
    res.status(StatusCodes.CONFLICT).json({ message: (error as Error).message }); 
  }
};
