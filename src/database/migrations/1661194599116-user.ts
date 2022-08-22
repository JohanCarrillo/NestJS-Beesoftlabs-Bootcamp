import {MigrationInterface, QueryRunner} from "typeorm";

export class user1661194599116 implements MigrationInterface {
    name = 'user1661194599116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "address" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
