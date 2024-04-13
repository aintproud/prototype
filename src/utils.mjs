import { scrypt, randomBytes } from 'crypto'

/**@param {number} ms @returns {Promise<void>}*/
export async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

/**@param {number} max @param {number} min @returns {number}*/
export function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

/**@param {string} password @returns {Promise<string>}*/
export async function createHash(password) {
	return new Promise((resolve, reject) => {
		const salt = randomBytes(8).toString('hex')
		scrypt(password, salt, 64, (err, derivedKey) => {
			if (err) reject(err)
			resolve(salt + ':' + derivedKey.toString('hex'))
		})
	})
}

/**@param {string} password @param {string} hashedPassword @returns {Promise<boolean>}*/
export async function verifyHash(password, hashedPassword) {
	return new Promise((resolve, reject) => {
		const [salt, key] = hashedPassword.split(':')
		scrypt(password, salt, 64, (err, derivedKey) => {
			if (err) reject(err)
			resolve(key === derivedKey.toString('hex'))
		})
	})
}
