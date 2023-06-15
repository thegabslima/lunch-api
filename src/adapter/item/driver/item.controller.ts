import {
	Controller,
	Get,
	Inject,
	Param,
	ParseIntPipe,
	Res,
} from '@nestjs/common';
import { Response } from 'express';

import { GET_ITEM_SERVICE } from '../item.symbols';
import { IGetItemService } from 'src/core/applications/interfaces/get-item.service.interface';

@Controller('item')
export class ItemController {
	constructor(
		@Inject(GET_ITEM_SERVICE) private readonly getItemService: IGetItemService
	) {}

	@Get(':id')
	public async findById(
		@Res() res: Response,
		@Param('id', ParseIntPipe) id: number
	): Promise<void> {
		try {
			const item = await this.getItemService.findById(id);
			if (!item) {
				res.status(404).send('Items not found');
			} else {
				res.status(200).send({ order: item });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Get('getItemBySnack')
	public async getItemBySnack(@Res() res: Response): Promise<void> {
		try {
			const item = await this.getItemService.getItemBySnack();
			if (!item) {
				res.status(404).send('Items not found');
			} else {
				res.status(200).send({ item: item });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Get('getItemByFollowUp')
	public async getItemByFollowUp(@Res() res: Response): Promise<void> {
		try {
			const item = await this.getItemService.getItemByFollowUp();
			if (!item) {
				res.status(404).send('Items not found');
			} else {
				res.status(200).send({ item: item });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Get('getItemByDrink')
	public async getItemByDrink(@Res() res: Response): Promise<void> {
		try {
			const item = await this.getItemService.getItemByDrink();
			if (!item) {
				res.status(404).send('Items not found');
			} else {
				res.status(200).send({ item: item });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	@Get('getItemByDessert')
	public async getItemByDessert(@Res() res: Response): Promise<void> {
		try {
			const item = await this.getItemService.getItemByDessert();
			if (!item) {
				res.status(404).send('Items not found');
			} else {
				res.status(200).send({ item: item });
			}
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}
