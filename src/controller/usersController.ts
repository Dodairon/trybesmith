import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import ServicePostUser from '../Service/usersService';

const postUser: RequestHandler = async (req, res) => {
  try {
    const { username, classe, level, password } = req.body;
    const users = await ServicePostUser(username, classe, level, password);
    res.status(StatusCodes.CREATED).json({ token: users });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: (error as Error).message });
  }
};

export default postUser;
