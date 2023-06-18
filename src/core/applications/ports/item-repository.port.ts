import { Item } from 'src/core/domain/item.entity';

export interface IItemRepositoryPort {
	findById(id: number): Promise<Item>;
	getItemBySnack(): Promise<Item[]>;
	getItemByFollowUp(): Promise<Item[]>;
	getItemByDrink(): Promise<Item[]>;
	getItemByDessert(): Promise<Item[]>;

	createItem(item: Item);
	updateItem(idItem: number, item: Item);
}
