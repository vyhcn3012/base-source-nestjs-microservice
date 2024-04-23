import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './apps/api-gateway/.env',
        }),
        // ClientsModule.register([
        //     {
        //         name: 'EXAMPLE_SERVICE',
        //         transport: Transport.REDIS,
        //         options: {
        //             host: process.env.REDIS_HOST || 'redis',
        //             port: 6379,
        //         },
        //     },
        // ]),
    ],
    controllers: [ApiGatewayController],
    providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
