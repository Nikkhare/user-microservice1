import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://cazxvfvw:GGR-2_payPEqkCXTBX5PMBhQiuTAmRKI@cougar.rmq.cloudamqp.com/cazxvfvw'],
          queue: 'user_main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
