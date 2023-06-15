import { IGetOrderService } from "../../../core/applications/interfaces/get-order.service.interface";
import { IOrderRepositoryPort } from "../../../core/applications/ports/order-repository.port";
import { OrderService } from "../../../core/applications/services/order.service";

export const buildGetOrderService = (repository: IOrderRepositoryPort): IGetOrderService => {
	return new OrderService(repository);
}