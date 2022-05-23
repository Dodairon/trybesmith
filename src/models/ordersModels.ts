import connection from './connection';
import { modelGetOrderId } from './productsModels';
import { Order } from '../interface';

const modelGetOrders = async () => {
  const sql = 'SELECT * FROM Trybesmith.Orders';
  const [queryGetOrders] = await connection.execute(sql);
  const orders = queryGetOrders as Order[];
  const productsOrderMap = orders.map((order) => modelGetOrderId(order.id));
  const productsOrder = await Promise.all(productsOrderMap);
  return orders.map((order, index) => ({
    ...order,
    productsIds: productsOrder[index].map((product) => product.id),
  }));
};

export default modelGetOrders;
