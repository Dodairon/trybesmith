import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const midName: RequestHandler = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }
  if (name.length < 3) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export const midAmount: RequestHandler = async (req, res, next) => {
  const { amount } = req.body;
  if (!amount) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};
