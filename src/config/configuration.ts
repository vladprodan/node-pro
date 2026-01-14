export default () => ({
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  app: {
    name: process.env.APP_NAME || 'NestApp',
    url: process.env.APP_URL || 'http://localhost:3000',
  },
});
