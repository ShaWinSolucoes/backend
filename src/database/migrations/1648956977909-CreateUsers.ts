import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1648956977909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'updateDateTime',
            type: 'timestamp',
          },
          {
            name: 'personalId',
            type: 'varchar',
          },
          {
            name: 'brandName',
            type: 'varchar',
          },
          {
            name: 'civilName',
            type: 'varchar',
          },
          {
            name: 'socialName',
            type: 'varchar',
          },
          {
            name: 'birthDate',
            type: 'varchar',
          },
          {
            name: 'maritalStatusCode',
            type: 'varchar',
          },
          {
            name: 'maritalStatusAdditionalInfo',
            type: 'varchar',
          },
          {
            name: 'sex',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
