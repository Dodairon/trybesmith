import { Order } from '../interface';
import modelGetOrders from '../models/ordersModels';

const ServiceGetOrders = async (): Promise<Order[]> => {
  const orders = await modelGetOrders();
  return orders;
};

export default ServiceGetOrders;