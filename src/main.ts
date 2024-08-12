import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up Cors
  app.enableCors({
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,  
  })

  // Security middleware
  app.use(helmet());

  // Rate limiting middleware
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: 'Too many requests from this IP, please try again later!' }));

  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // Start the application
  await app.listen(3000);
}
bootstrap();
