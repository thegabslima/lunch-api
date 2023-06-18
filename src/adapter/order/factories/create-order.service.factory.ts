import { ICreateOrderService } from "../../../core/applications/interfaces/create-order.service.interface";
import { IOrderRepositoryPort } from "../../../core/applications/ports/order-repository.port";
import { CreateOrderService } from "../../../core/applications/services/create-order.service";

export const buildCreateOrderService = (repository: IOrderRepositoryPort): ICreateOrderService => {
	return new CreateOrderService(repository);
}