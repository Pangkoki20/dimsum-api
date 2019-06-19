import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.modules';
import { UsersProvider } from './users.provider';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UsersProvider, UsersService],
  // MailService
  exports: [UsersService],
})
export class UsersModule {}
