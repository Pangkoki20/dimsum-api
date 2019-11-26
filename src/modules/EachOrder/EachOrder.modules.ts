import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.modules';
import { OrderProvider } from './EachOrder.provider';
import { EachOrderService } from './eachorder.service';
import { EachOrderController } from './eachorder.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EachOrderController],
  providers: [...EachOrderProvider, EachOrderService],
  // MailService
  exports: [EachOrderService],
})
export class EachOrderModule {}
