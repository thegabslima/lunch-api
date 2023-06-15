import { Order } from "../../domain/order.entity";

export interface IOrderRepositoryPort {
	findById(id: number): Promise<Order>;
	listProcessingOrders(): Promise<Order[]>;
}