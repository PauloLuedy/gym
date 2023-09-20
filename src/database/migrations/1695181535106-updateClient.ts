import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClient1695181535106 implements MigrationInterface {
    name = 'UpdateClient1695181535106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "document"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "document" character varying NOT NULL`);
    }

}
