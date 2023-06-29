import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { ClientModule } from './client/client.module';

@Module({
	imports: [OrderModule, ClientModule],
})
export class AdapterModule {}
