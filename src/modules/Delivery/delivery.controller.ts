import {
  Controller,
  Req,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { ApiUseTags } from '@nestjs/swagger';

import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';

@ApiUseTags('delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async find(@Body() $body, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      let result = await this.deliveryService.find({
        where: { isDisable: false },
        // relations: ['order'],
        // delivery: { id: 'DESC' },
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get(':id')
  async findDelivery(@Param('id') id, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      console.log('Delivery id = ', id);

      let result = await this.deliveryService.find({
        where: {
          order_id: `${id}`,
          isDisable: false,
        },
        relations: [],
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }
}
