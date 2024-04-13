// @ts-nocheck
import pino from 'pino'
import config from '../config.mjs'
const consoleTransport =
	config.type === 'PROD'
		? {
				target: 'pino/file',
			}
		: {
				target: 'pino-pretty',
				options: {
					levelFirst: true,
					colorize: true,
					translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
					ignore: 'pid,hostname',
				},
			}
const fileTransport = {
	target: 'pino/file',
	options: {
		destination: 'logs/app.log',
		mkdir: true,
		rotate: '7d',
	},
}
const transports = pino.transport({
	targets: [consoleTransport, fileTransport],
})
export const logger = pino(transports)

export default logger
