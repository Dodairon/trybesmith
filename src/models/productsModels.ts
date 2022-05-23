import { ResultSetHeader } from 'mysql2';
import { Products } from '../interface';
import connection from './connection';

export const modelGetAll = async (): Promise<Products[]> => {
  const sql = 'SELECT * FROM Trybesmith.Products';
  const [queryGetAll] = await connection.execute(sql);
  return queryGetAll as Products[];
};

export const modelPostProduct = async (name: string, amount: string): Promise<Products> => {
  const sql = `INSERT INTO
  Trybesmith.Products(name, amount)
  VALUES (?, ?)`;
  const [createProducts] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
  const { insertId } = createProducts;
  return { id: insertId, name, amount } as Products;
};

export const modelGetOrderId = async (id: number): Promise<Products[]> => {
  const sql = 'SELECT * FROM Trybesmith.Products WHERE orderId=?';
  const [GetOrderId] = await connection.execute(sql, [id]);
  return GetOrderId as Products[];
};
