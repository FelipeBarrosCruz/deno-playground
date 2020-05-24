import config from './config/index.ts'
import logger from './logger/index.ts' 

logger.info(`App name ${config.APP_NAME}`)
logger.info(`App port ${config.APP_PORT}`)
