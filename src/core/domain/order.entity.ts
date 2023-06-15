import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Client } from './client.entity';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from '../value-objects/order-status';

@Entity('order')
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	status: OrderStatus;

	@Column()
	finishedAt: Date;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Client, (item) => item.orders)
	client: Client;

	@OneToMany(() => OrderItem, (item) => item.order)
	orderItems?: OrderItem[];
}
