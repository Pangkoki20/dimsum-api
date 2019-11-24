import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.modules';
import { ConfirmProvider } from './confirm.provider';
import { ConfirmService } from './confirm.service';
import { ConfirmController } from './confirm.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfirmController],
  providers: [...ConfirmProvider, ConfirmService],
  // MailService
  exports: [ConfirmService],
})
export class ConfirmModule {}
