import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app =
        await NestFactory.create<NestExpressApplication>(ApiGatewayModule);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: false,
        }),
    );

    await app.listen(5555);
}
bootstrap();
