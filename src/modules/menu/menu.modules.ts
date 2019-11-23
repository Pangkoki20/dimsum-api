import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.modules';
import { MenuProvider } from './menu.provider';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
// import { MailService } from '../mail/mail.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [...MenuProvider, MenuService],
  // MailService
  exports: [MenuService],
})
export class MenuModule {}
