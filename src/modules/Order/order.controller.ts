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
import { ApiUseTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';

import { OrderService } from './order.service';
import { MenuOrderService } from '../MenuOrder/menu_order.service';

@ApiUseTags('order')
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly menuOrderService: MenuOrderService,
  ) {}

  @Get()
  async find(@Body() $body, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      let result = await this.orderService.find({
        where: { isDisable: false },
        // relations: [],
        // order: { id: 'DESC' },
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Post('create')
  async createOrder(@Body() $body, @Req() $req, @Res() $res) {
    try {
      console.log('Data Comming ! ', $body);
      // if ($body.id) {
      //   $body.id = await parseInt($body.id.toString());
      // }

      let order = await Object.assign({}, $body);
      order = await this.orderService.saveOne(order);

      let menu: any = await $body.order.map(obj => {
        obj.order_id = order.id;
        obj.price = obj.menu_price;
        obj.namefood = obj.menu_name;
        this.menuOrderService.save(obj);
      });
      console.log('before save ................. ', menu);

      await $res.status(HttpStatus.OK).json(order);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'error' });
    }
  }

  @Get(':id')
  async findMenu(@Param('id') id, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      console.log('MenuOrder id = ', id);

      let result = await this.orderService.find({
        where: {
          id: `${id}`,
          isDisable: false,
        },
        relations: [],
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get('orderbystatus/:id')
  async findOrderByStatus(@Param('id') id, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      console.log('MenuOrder id = ', id);

      let result = await this.orderService.find({
        where: {
          status: `${id}`,
          isDisable: false,
        },
        relations: [],
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get('orderbyuser/:id')
  async findMenuByUser(@Param('id') id, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      console.log('MenuOrder id = ', id);

      let result = await this.orderService.find({
        where: {
          user_id: `${id}`,
          
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
