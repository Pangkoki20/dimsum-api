import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.modules';
import { UsersModule } from './modules/user/users.modules';
import { OrderModule } from './modules/order/order.modules';

@Module({
  imports: [DatabaseModule, UsersModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
