import { Order } from "../../domain/order.entity";
import { OrderToCreateDto } from "../../dtos/order-to-create.dto";
import { OrderStatus } from "../../value-objects/order-status";

export interface IOrderRepositoryPort {
	findById(id: number): Promise<Order>;
	listProcessingOrders(): Promise<Order[]>;
	create(orderToCreate: OrderToCreateDto): Promise<Order>;
	updateStatus(id: number, status: OrderStatus): Promise<boolean>;
	updateFinishedAt(id: number): Promise<boolean>;
}