import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { MenuProvider } from './menu_order.provider';
import { MenuService } from './menu_order.service';
import { MenuController } from './menu_order.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [...MenuProvider, MenuService],
  // MailService
  exports: [MenuService],
})
export class MenuModule {}
