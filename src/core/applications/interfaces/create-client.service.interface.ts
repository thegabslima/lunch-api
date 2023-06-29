import { Client } from "../../domain/client.entity";
import ICreateClientDTO from "src/adapter/client/dtos/ICreateClientDTO";

export interface ICreateClientService {
	createClient({ document, email, name }: ICreateClientDTO): Promise<Client>;
}