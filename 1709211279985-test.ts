import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1709211279985 implements MigrationInterface {
    name = 'Test1709211279985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '"2024-02-29T12:54:41.737Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '"2024-02-29T12:54:41.737Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-02-29 12:49:11.689'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-02-29 12:49:11.689'`);
    }

}
