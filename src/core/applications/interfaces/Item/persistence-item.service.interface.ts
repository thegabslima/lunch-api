import { Item } from 'src/core/domain/item.entity';

export interface IPersistenceItemService {
	createItem(item: Item): Promise<Item>;
	updateItem(idItem: number, item: Item): Promise<Item>;
}
