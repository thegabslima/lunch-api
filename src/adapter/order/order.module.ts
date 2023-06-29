import { Module } from '@nestjs/common';
import { OrderController } from './driver/order.controller';
import { CREATE_ORDER_SERVICE, GET_ORDER_SERVICE, LIST_PROCESSING_ORDER_SERVICE, UPDATE_ORDER_STATUS_SERVICE } from './order.symbols';
import { OrderRepository } from './driven/order.repository';
import { buildGetOrderService } from './factories/get-order.service.factory';
import { buildListProcessingOrdersService } from './factories/list-processing-orders.service.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../core/domain/order.entity';
import { buildCreateOrderService } from './factories/create-order.service.factory';
import { ItemModule } from '../item/item.module';
import { GET_ITEM_SERVICE } from '../item/item.symbols';
import { buildUpdateOrderStatusService } from './factories/update-order-status.service.factory';

@Module({
	imports: [TypeOrmModule.forFeature([Order]), ItemModule],
	providers: [
		OrderRepository,
		{
			provide: CREATE_ORDER_SERVICE,
			inject: [OrderRepository, GET_ITEM_SERVICE],
			useFactory: buildCreateOrderService,
		},
		{
			provide: GET_ORDER_SERVICE,
			inject: [OrderRepository],
			useFactory: buildGetOrderService,
		},
		{
			provide: LIST_PROCESSING_ORDER_SERVICE,
			inject: [OrderRepository],
			useFactory: buildListProcessingOrdersService,
		},
		{
			provide: UPDATE_ORDER_STATUS_SERVICE,
			inject: [OrderRepository],
			useFactory: buildUpdateOrderStatusService,
		},
	],
	controllers: [OrderController],
})
export class OrderModule {}
