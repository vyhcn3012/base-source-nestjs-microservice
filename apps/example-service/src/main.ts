import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ExampleServiceModule } from './example-service.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        ExampleServiceModule,
        {
            transport: Transport.REDIS,
            options: {
                host: process.env.REDIS_HOST || 'redis',
                port: 6379,
            },
        },
    );
    await app.listen();
}
bootstrap();
