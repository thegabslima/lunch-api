import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { getIntId } from "../utils/migration"

export class Initial1686015227728 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "category",
				columns: [
					getIntId(),
					{
						name: "name",
						type: "varchar",
						isNullable: false
					},
					{
						name: "description",
						type: "varchar",
						isNullable: true
					}
				]
			})
		)
		await queryRunner.manager.insert("category", [
			{
				name: "Lanche",
			},
			{
				name: "Acompanhamento",
			},
			{
				name: "Bebida",
			},
			{
				name: "Sobremesa",
			}
		])

		await queryRunner.createTable(new Table({
			name: "item",
			columns: [
				getIntId(),
				{
					name: "name",
					type: "varchar",
					isNullable: false
				},
				{
					name: "description",
					type: "varchar",
					isNullable: true
				},
				{
					name: "price",
					type: "decimal",
					isNullable: false
				},
				{
					name: "category_id",
					type: "int",
					isNullable: false,
					unsigned: true
				}
			],
			foreignKeys: [{
				columnNames: ["category_id"],
				referencedTableName: "category",
				referencedColumnNames: ["id"],
				onUpdate: "CASCADE",
				onDelete: "NO ACTION"
			}]
		}))

		await queryRunner.createTable(new Table({
			name: "client",
			columns: [
				getIntId(),
				{
					name: "document",
					type: "varchar",
					length: "11",
					isNullable: true
				},
				{
					name: "name",
					type: "varchar",
					length: "45",
					isNullable: true
				},
				{
					name: "email",
					type: "varchar",
					length: "100",
					isNullable: true
				},
			]
		}))

		await queryRunner.createTable(new Table({
			name: "order",
			columns: [
				getIntId(),
				{
					name: "client_id",
					type: "int",
					isNullable: false,
					unsigned: true
				}
			],
			foreignKeys: [{
				columnNames: ["client_id"],
				referencedTableName: "client",
				referencedColumnNames: ["id"],
				onUpdate: "CASCADE",
				onDelete: "NO ACTION"
			}]
		}))

		await queryRunner.createTable(new Table({
			name: "order_has_item",
			columns: [
				getIntId(),
				{
					name: "order_id",
					type: "int",
					unsigned: true,
					isNullable: false
				},
				{
					name: "item_id",
					type: "int",
					unsigned: true,
					isNullable: false,
				},
				{
					name: "quantity",
					type: "int",
					isNullable: false,
				},
				{
					name: "price",
					type: "decimal",
					isNullable: false,
				},
			],
			foreignKeys: [
				{
					columnNames: ["order_id"],
					referencedTableName: "order",
					referencedColumnNames: ["id"],
					onUpdate: "CASCADE",
					onDelete: "NO ACTION"
				}, {
					columnNames: ["item_id"],
					referencedTableName: "item",
					referencedColumnNames: ["id"],
					onUpdate: "CASCADE",
					onDelete: "NO ACTION"
				}
			]
		}))

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("order_has_item")
		await queryRunner.dropTable("order")
		await queryRunner.dropTable("client")
		await queryRunner.dropTable("item")
		await queryRunner.dropTable("category")
	}

}
