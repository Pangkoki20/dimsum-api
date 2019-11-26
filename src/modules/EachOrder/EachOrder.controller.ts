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
import { EachOrderService } from './EachOrder.service';
import { ApiUseTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';

@ApiUseTags('eachorder')
@Controller('eachorder')
export class EachOrderController {
  constructor(private readonly orderService: EachOrderService) {}
  @Get()
  async find(@Body() $body, @Req() $req, @Res() $res) {
    try {
      let result = await this.orderService.find({
        where: { isDisable: false },
        relations: ['order'],
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
      let eachorder = await this.orderService.findOne({
        where: {
          id: $body['id'],
        },
      });

      if (eachorder) {
        eachorder.isChecked = $body['checked'];
        eachorder = await this.orderService.saveOne(eachorder);
        await $res.status(HttpStatus.OK).json(eachorder);
      } else {
        await $res.status(HttpStatus.OK).json({ message: 'Error' });
      }
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }
}
