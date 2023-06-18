import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Item } from 'src/core/domain/item.entity';
import { TypeItem } from 'src/core/value-objects/type-item';
import { IItemRepositoryPort } from 'src/core/applications/ports/item-repository.port';

@Injectable()
export class ItemRepository implements IItemRepositoryPort {
	constructor(
		@InjectRepository(Item)
		private itemRepository: Repository<Item>
	) {}

	createItem(item: Item) {
		return this.itemRepository.create(item);
	}

	updateItem(id: number, item: Item) {
		return this.itemRepository.update(id, item);
	}

	getItemBySnack(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.SNACK,
				},
			},
		});
	}

	getItemByFollowUp(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.FOLLOW_UP,
				},
			},
		});
	}

	getItemByDrink(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.DRINK,
				},
			},
		});
	}

	getItemByDessert(): Promise<Item[]> {
		return this.itemRepository.find({
			where: {
				category: {
					id: TypeItem.DESSERT,
				},
			},
		});
	}

	findById(id: number): Promise<Item> {
		return this.itemRepository.findOne({
			where: {
				id,
			},
		});
	}
}
