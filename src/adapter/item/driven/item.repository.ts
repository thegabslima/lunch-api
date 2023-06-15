import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IItemRepositoryPort } from 'src/core/applications/ports/item-repository.port';
import { Item } from 'src/core/domain/item.entity';
import { TypeItem } from 'src/core/value-objects/type-item';
import { Repository } from 'typeorm';

@Injectable()
export class ItemRepository implements IItemRepositoryPort {
	constructor(
		@InjectRepository(Item) private itemRepository: Repository<Item>
	) {}

	getItemBySnack(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.SNACK,
				},
			},
			relations: ['name', 'description', 'price', 'category_id'],
		});
	}

	getItemByFollowUp(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.FOLLOW_UP,
				},
			},
			relations: ['name', 'description', 'price', 'category_id'],
		});
	}

	getItemByDrink(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.DRINK,
				},
			},
			relations: ['name', 'description', 'price', 'category_id'],
		});
	}

	getItemByDessert(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.DESSERT,
				},
			},
			relations: ['name', 'description', 'price', 'category_id'],
		});
	}

	findById(id: number): Promise<Item> {
		return this.itemRepository.findOne({
			where: {
				id,
			},
			relations: ['name', 'description', 'price', 'category_id'],
		});
	}
}
