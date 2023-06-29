import { Order } from "../../domain/order.entity";
import { InvalidOrderStatusError } from "../../errors/invalid-order-status.error";
import { OrderNotFoundError } from "../../errors/order-not-found.error";
import { OrderStatus } from "../../value-objects/order-status";
import { IUpdateOrderStatusService } from "../interfaces/update-order-status.service.interface";
import { IOrderRepositoryPort } from "../ports/order-repository.port";

export class UpdateOrderStatusService implements IUpdateOrderStatusService {
	constructor(private readonly orderRepository: IOrderRepositoryPort) {}

	private async validateOrderAndStatus(id: number, ...status: OrderStatus[]): Promise<void> {
		const order = await this.orderRepository.findById(id);
		if (!order)
			throw new OrderNotFoundError()
		if (!status.includes(order.status))
			throw new InvalidOrderStatusError(...status);
	}

	async updateStatusProcessing(id: number): Promise<Order> {
		await this.validateOrderAndStatus(id, OrderStatus.RECEIVED);
		await this.orderRepository.updateStatus(id, OrderStatus.PROCESSING)
		// TODO: Notificação para o cliente
		return this.orderRepository.findById(id);
	}

	async updateStatusReady(id: number): Promise<Order> {
		await this.validateOrderAndStatus(id, OrderStatus.PROCESSING);
		await this.orderRepository.updateStatus(id, OrderStatus.READY)
		// TODO: Notificação para o cliente
		return this.orderRepository.findById(id);
	}

	async updateStatusFinished(id: number): Promise<Order> {
		await this.validateOrderAndStatus(id, OrderStatus.READY);
		await this.orderRepository.updateStatus(id, OrderStatus.FINISHED)
		return this.orderRepository.findById(id);
	}
}
