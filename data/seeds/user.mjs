import { faker } from '@faker-js/faker'
import { createHash } from '../../src/utils.mjs'

export const seed = async (knex) => {
	await knex('users').del()
	const users = []
	for (let i = 0; i < 10; i++) {
		users.push({
			name: faker.person.firstName(),
			email: faker.internet.email(),
			password_hash: await createHash('password'),
		})
	}
	await knex('users').insert(users)
}
