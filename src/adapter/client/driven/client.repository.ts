import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Client } from '../../../core/domain/client.entity';
import { IClientRepositoryPort } from '../../../core/applications/ports/client-repository.port';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

@Injectable()
export class ClientRepository implements IClientRepositoryPort {
	constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {
	}
	findByDocument(document: string): Promise<Client> {
		return this.clientRepository.findOne({
			where: {
				document,
			},
		});
	}
	async createClient(clientData: ICreateClientDTO): Promise<Client> {
		const client = this.clientRepository.create(clientData);
		await this.clientRepository.save(client)
		return client;
	}
}
