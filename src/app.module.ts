import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.modules';
import { UsersModule } from './modules/user/users.modules';
import { OrderModule } from './modules/order/order.modules';
import { MenuModule } from './modules/menu/menu.modules';
import { ConfirmModule} from './modules/confirm/confirm.modules';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    OrderModule,
    MenuModule,
    ConfirmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
