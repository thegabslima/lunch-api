import {
	Body,
	Controller,
	Get,
	Inject,
	Param,
	ParseIntPipe,
	Post,
	Res,
} from '@nestjs/common';
import { IGetOrderService } from '../../../core/applications/interfaces/get-order.service.interface';
import { CREATE_ORDER_SERVICE, GET_ORDER_SERVICE, LIST_PROCESSING_ORDER_SERVICE } from '../order.symbols';
import { IListProcessingOrdersService } from '../../../core/applications/interfaces/list-processing-orders.service.interface';
import { Response } from 'express';
import { ICreateOrderService } from '../../../core/applications/interfaces/create-order.service.interface';
import { CreateOrderDto } from '../dtos/create-order.dto';

@Controller('order')
export class OrderController {
	constructor(
		@Inject(CREATE_ORDER_SERVICE) private readonly createOrderService: ICreateOrderService,
		@Inject(GET_ORDER_SERVICE) private readonly getOrderService: IGetOrderService,
		@Inject(LIST_PROCESSING_ORDER_SERVICE) private readonly listProcessingOrdersService: IListProcessingOrdersService,
	) {}

	@Get('list-processing-orders')
	public async listProcessingOrders(@Res() res: Response): Promise<void> {
		try {
			const list = await this.listProcessingOrdersService.listProcessingOrders();
			if (!list) {
				res.status(404).send('Orders not found');
			} else {
				res.status(200).send({ list });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Get(':id')
	public async findById(@Res() res: Response, @Param('id', ParseIntPipe) id: number): Promise<void> {
		try {
			const order = await this.getOrderService.findById(id);
			if (!order) {
				res.status(404).send('Orders not found');
			} else {
				res.status(200).send({ order });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Post()
	public async create(@Res() res: Response, @Body() body: CreateOrderDto): Promise<void> {
		try {
			const order = await this.createOrderService.create(body);
			res.status(201).send({ order });
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}
