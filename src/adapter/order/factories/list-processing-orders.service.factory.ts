import { IListProcessingOrdersService } from "../../../core/applications/interfaces/list-processing-orders.service.interface";
import { IOrderRepositoryPort } from "../../../core/applications/ports/order-repository.port";
import { OrderService } from "../../../core/applications/services/order.service";

export const buildListProcessingOrdersService = (repository: IOrderRepositoryPort): IListProcessingOrdersService => {
	return new OrderService(repository);
}