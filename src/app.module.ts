import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.modules';
import { UsersModule } from './modules/user/users.modules';
import { EachOrderModule } from './modules/EachOrder/eachorder.modules';
import { MenuModule } from './modules/menu/menu.modules';
@Module({
  imports: [DatabaseModule, UsersModule, EachOrderModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
