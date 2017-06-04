import winston from 'winston';

const globalLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
  ],
});

export const helloWorld = (logger = globalLogger) => {
  logger.info('Hello, World!');
  return 'Hello, World!';
};

export const handler = (event, context, cb) => {
  cb(null, helloWorld());
};
