module.exports = class Data1704966964132 {
    name = 'Data1704966964132'

    async up(db) {
        await db.query(`CREATE TABLE "withdraw" ("id" character varying NOT NULL, "investor" text NOT NULL, "amount" numeric NOT NULL, "bonus_amount" numeric NOT NULL, CONSTRAINT "PK_5c172f81689173f75bf5906ef22" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c850e3ca878cf17cccf38eb5bb" ON "withdraw" ("investor") `)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "token_id" numeric NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_be54ea276e0f665ffc38630fc0" ON "transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_4cbc37e8c3b47ded161f44c24f" ON "transfer" ("to") `)
        await db.query(`CREATE TABLE "tickets_bought" ("id" character varying NOT NULL, "wallet" text NOT NULL, "count" numeric NOT NULL, CONSTRAINT "PK_86954c561047c1450fc82a764ee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_397990e50487eff8c23d015554" ON "tickets_bought" ("wallet") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "withdraw"`)
        await db.query(`DROP INDEX "public"."IDX_c850e3ca878cf17cccf38eb5bb"`)
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_be54ea276e0f665ffc38630fc0"`)
        await db.query(`DROP INDEX "public"."IDX_4cbc37e8c3b47ded161f44c24f"`)
        await db.query(`DROP TABLE "tickets_bought"`)
        await db.query(`DROP INDEX "public"."IDX_397990e50487eff8c23d015554"`)
    }
}
