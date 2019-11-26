import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { MenuOrderProvider } from './menu_order.provider';
import { MenuOrderService } from './menu_order.service';
import { MenuOrderController } from './menu_order.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuOrderController],
  providers: [...MenuOrderProvider, MenuOrderService],
  // MailService
  exports: [MenuOrderService],
})
export class MenuOrderModule {}
