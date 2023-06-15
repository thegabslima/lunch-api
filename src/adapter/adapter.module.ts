import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';

@Module({
	imports: [OrderModule, ItemModule],
})
export class AdapterModule {}
