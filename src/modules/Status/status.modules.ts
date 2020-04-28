import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.modules';
import { StatusProvider } from './status.provider';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [...StatusProvider, StatusService],
  // MailService
  exports: [StatusService],
})
export class StatusModule {}
