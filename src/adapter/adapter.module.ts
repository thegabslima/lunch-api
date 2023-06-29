import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';
import { ClientModule } from './client/client.module';

@Module({
	imports: [OrderModule, ItemModule, ClientModule],
})
export class AdapterModule {}
