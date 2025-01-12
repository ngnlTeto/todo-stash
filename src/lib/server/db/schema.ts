import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name'),
	age: integer('age'),
	password: text("password").notNull(),
});


export type NewUser = typeof user.$inferInsert;
