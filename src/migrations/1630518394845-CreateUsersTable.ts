import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1630518394845 implements MigrationInterface {
    name = 'CreateUsersTable1630518394845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "userName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "website" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}