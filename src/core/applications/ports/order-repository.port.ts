import { Order } from "../../domain/order.entity";
import { OrderToCreateDto } from "../../dtos/order-to-create.dto";

export interface IOrderRepositoryPort {
	findById(id: number): Promise<Order>;
	listProcessingOrders(): Promise<Order[]>;
	create(orderToCreate: OrderToCreateDto): Promise<Order>;
}