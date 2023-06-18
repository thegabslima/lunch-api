import { Item } from 'src/core/domain/item.entity';
import { IGetItemService } from '../interfaces/Item/get-item.service.interface';
import { IItemRepositoryPort } from '../ports/item-repository.port';
import { IPersistenceItemService } from '../interfaces/Item/persistence-item.service.interface';

export class ItemService implements IGetItemService, IPersistenceItemService {
	constructor(private readonly itemRepository: IItemRepositoryPort) {}

	createItem(item: Item): Promise<Item> {
		return this.itemRepository.createItem(item);
	}

	updateItem(idItem: number, item: Item): Promise<Item> {
		return this.itemRepository.updateItem(idItem, item);
	}

	getItemBySnack(): Promise<Item[]> {
		return this.itemRepository.getItemBySnack();
	}

	getItemByFollowUp(): Promise<Item[]> {
		return this.itemRepository.getItemByFollowUp();
	}

	getItemByDrink(): Promise<Item[]> {
		return this.itemRepository.getItemByDrink();
	}

	getItemByDessert(): Promise<Item[]> {
		return this.itemRepository.getItemByDessert();
	}

	findById(id: number): Promise<Item> {
		return this.itemRepository.findById(id);
	}
}
