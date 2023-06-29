import { IUpdateOrderStatusService } from "../../../core/applications/interfaces/update-order-status.service.interface";
import { IOrderRepositoryPort } from "../../../core/applications/ports/order-repository.port";
import { UpdateOrderStatusService } from "../../../core/applications/services/update-order-status.service";

export const buildUpdateOrderStatusService = (repository: IOrderRepositoryPort): IUpdateOrderStatusService => {
	return new UpdateOrderStatusService(repository);
}