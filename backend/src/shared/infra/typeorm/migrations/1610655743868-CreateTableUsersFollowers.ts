import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateTableUsersFollowers1610655743868
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_followers',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'follower_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'users_followers',
      new TableForeignKey({
        name: 'pk_userFollowers_userId',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'users_followers',
      new TableForeignKey({
        name: 'pk_usersFollowers_followerId',
        columnNames: ['follower_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'pk_userFollowers_userId');
    await queryRunner.dropForeignKey('users', 'pk_usersFollowers_followerId');
    await queryRunner.dropTable('users_followers');
  }
}
