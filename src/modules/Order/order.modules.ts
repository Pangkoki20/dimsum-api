import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { OrderProvider } from './order.provider';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers: [...OrderProvider, OrderService],
  // MailService
  exports: [OrderService],
})
export class OrderModule {}
