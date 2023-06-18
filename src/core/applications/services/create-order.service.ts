import { Order } from "../../domain/order.entity";
import { CreateOrderDto } from "../../dtos/create-order.dto";
import { ICreateOrderService } from "../interfaces/create-order.service.interface";
import { IOrderRepositoryPort } from "../ports/order-repository.port";

export class CreateOrderService implements ICreateOrderService {
	constructor(private readonly orderRepository: IOrderRepositoryPort) {}
	create(dto: CreateOrderDto): Promise<Order> {
		// TODO: Buscar os itens no banco de dados
		// TODO: Gerar items do pedido com base no preço e quantidade
		// TODO: Criar pedido com os items e client
		// TODO: Retornar pedido
		throw new Error("Method not implemented.");
	}

}
