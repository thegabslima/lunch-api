import ICreateClientDTO from "src/adapter/client/dtos/ICreateClientDTO";
import { Client } from "../../domain/client.entity";
import { IGetClientService } from "../interfaces/get-client.service.interface";
import { IClientRepositoryPort } from "../ports/client-repository.port";
import { ICreateClientService } from "../interfaces/create-client.service.interface";

export class ClientService implements IGetClientService, ICreateClientService {
	constructor(
		private readonly clientRepository: IClientRepositoryPort
	) {}
	findByDocument(document: string): Promise<Client> {
		return this.clientRepository.findByDocument(document);
	}
	createClient({ document, email, name }: ICreateClientDTO): Promise<Client> {
		return this.clientRepository.createClient({ document, email, name })
	}

	
}
