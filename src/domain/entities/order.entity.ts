import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Client } from './client.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Client, (item) => item.orders)
	client: Client;

	@OneToMany(() => OrderItem, (item) => item.order)
	orderItems?: OrderItem[];
}
