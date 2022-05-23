import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import ServiceGetOrders from '../Service/orderService';

const getOrder: RequestHandler = async (_req, res) => {
  const orders = await ServiceGetOrders();
  res.status(StatusCodes.OK).json(orders);
};

export default getOrder;