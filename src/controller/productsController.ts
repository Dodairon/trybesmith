import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ServiceGetAll } from '../Service/productsService';

export const getAll: RequestHandler = async (_req, res) => {
  const products = await ServiceGetAll();
  res.status(StatusCodes.OK).json(products);
};

export const getById: RequestHandler = async (_req, res) => {
  const products = await ServiceGetAll();
  res.status(StatusCodes.OK).json(products);
};
