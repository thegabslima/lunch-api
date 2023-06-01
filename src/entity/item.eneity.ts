import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @OneToOne(() => Category, (category) => category.id)
  category_id: string;
}
