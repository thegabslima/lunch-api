import ICreateClientDTO from "src/adapter/client/dtos/ICreateClientDTO";
import { Client } from "../../domain/client.entity";

export interface IClientRepositoryPort {
	findByDocument(document: string): Promise<Client>;
	createClient({ document, email, name }: ICreateClientDTO): Promise<Client>
}