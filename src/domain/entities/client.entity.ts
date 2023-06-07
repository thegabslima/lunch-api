import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Client {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email?: string;

	@Column()
	document?: string;

	@Column()
	name?: string;

	@OneToMany(() => Order, (item) => item.client)
	orders?: Order[];
}
