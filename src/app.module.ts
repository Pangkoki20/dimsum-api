import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.modules';
import { UsersModule } from './modules/user/users.modules';
import { OrderModule } from './modules/Order/order.modules';
import { MenuOrder } from './modules/MenuOrder/menu_order.entity';
@Module({
  imports: [DatabaseModule, UsersModule, OrderModule, MenuOrder],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
