import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const modelPostUser = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<number> => {
  const sql = `INSERT INTO
  Trybesmith.Users(username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const [createUsers] = await connection.execute<ResultSetHeader>(sql, [
    username,
    classe,
    level,
    password,
  ]);
  const { insertId } = createUsers;
  return insertId;
};

export default modelPostUser;
