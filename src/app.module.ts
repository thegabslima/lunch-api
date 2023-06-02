import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDbConfig } from './config/database';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...getDbConfig(),
		}),
	],
})
export class AppModule {}
