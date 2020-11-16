import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateIdea1605530466633 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'idea',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'title',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'category',
						type: 'varchar'
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('idea');
	}
}
