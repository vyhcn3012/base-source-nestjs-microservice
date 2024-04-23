import { ExampleServiceService } from './example-service.service';
import { ExampleServiceController } from './example-service.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './apps/example-service/.env',
        }),
    ],
    controllers: [ExampleServiceController],
    providers: [ExampleServiceService],
})
export class ExampleServiceModule {}
