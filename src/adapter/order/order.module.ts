import { Module } from '@nestjs/common';
import { OrderController } from './driver/order.controller';
import { GET_ORDER_SERVICE, LIST_PROCESSING_ORDER_SERVICE } from './order.symbols';
import { OrderRepository } from './driven/order.repository';
import { buildGetOrderService } from './factories/get-order.service.factory';
import { buildListProcessingOrdersService } from './factories/list-processing-orders.service.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../../core/domain/order.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Order])],
	providers: [
		OrderRepository,
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
	],
	controllers: [OrderController],
})
export class OrderModule {}
