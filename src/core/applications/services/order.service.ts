import { Order } from "../../domain/order.entity";
import { IGetOrderService } from "../interfaces/get-order.service.interface";
import { IListProcessingOrdersService } from "../interfaces/list-processing-orders.service.interface";
import { IOrderRepositoryPort } from "../ports/order-repository.port";

export class OrderService implements IGetOrderService, IListProcessingOrdersService {
	constructor(private readonly orderRepository: IOrderRepositoryPort) {}
	findById(id: number): Promise<Order> {
		return this.orderRepository.findById(id);
	}
	listProcessingOrders(): Promise<Order[]> {
		return this.orderRepository.listProcessingOrders();
	}

}
