import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { DeliveryProvider } from './delivery.provider';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DeliveryController],
  providers: [...DeliveryProvider, DeliveryService],
  // MailService
  exports: [DeliveryService],
})
export class DeliveryModule {}
