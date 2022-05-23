import Jwt from 'jsonwebtoken';
import modelPostUser from '../models/usersModels';

const ServicePostUser = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<string> => {
  const users = await modelPostUser(username, classe, level, password);
  const token = Jwt.sign({ users }, 'batata');
  return token;
};

export default ServicePostUser;
