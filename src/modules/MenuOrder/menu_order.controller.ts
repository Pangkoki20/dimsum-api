import {
  Controller,
  Req,
  Res,
  HttpStatus,
  Body,
  Get,
  Post,
  Put,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { MenuService } from './menu_order.service';
import { ApiUseTags } from '@nestjs/swagger';

import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';

@ApiUseTags('menu')
@Controller('menu')
export class MenuOrderController {
  constructor(private readonly menuService: MenuOrderService) {}

  @Get()
  async find(@Body() $body, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      let result = await this.menuService.find({
        where: { isDisable: false },
        relations: ['menu'],
        // menu: { id: 'DESC' },
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Patch('update')
  async updateUser(@Body() $body, @Res() $res) {
    try {
      console.log('DATAAAAAA', $body);
      let menu = await this.menuService.findOne({
        where: {
          id: $body['id'],
        },
      });

      if (menu) {
        menu.isChecked = $body['checked'];
        menu = await this.menuService.saveOne(menu);
        await $res.status(HttpStatus.OK).json(menu);
      } else {
        await $res.status(HttpStatus.OK).json({ message: 'Error' });
      }
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }
}
