import Products from '../interface';
import connection from './connection';

export const modelGetAll = async (): Promise<Products[]> => {
  const sql = 'SELECT * FROM Trybesmith.Products';
  const [queryGetAll] = await connection.execute(sql);
  return queryGetAll as Products[];
};

export const modelGetById = async () => {
  const sql = 'SELECTsadasdsadsadass';
  const [queryGetAll] = await connection.execute(sql);
  return queryGetAll;
};
