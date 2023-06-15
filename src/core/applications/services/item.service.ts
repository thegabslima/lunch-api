import { Item } from 'src/core/domain/item.entity';
import { IGetItemService } from '../interfaces/get-item.service.interface';
import { IItemRepositoryPort } from '../ports/item-repository.port';

export class ItemService implements IGetItemService {
	constructor(private readonly itemRepository: IItemRepositoryPort) {}

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
