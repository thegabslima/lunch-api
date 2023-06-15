import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
import { OrderItem } from './order-item.entity';

@Entity('item')
export class Item {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	price: number;

	@Column()
	description?: string;

	@ManyToOne(() => Category)
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@OneToMany(() => OrderItem, (item) => item.item)
	orderItems?: OrderItem[];
}
