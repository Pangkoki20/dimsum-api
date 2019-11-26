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
import { OrderService } from './order.service';
import { ApiUseTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';
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

  @Post()
  async createOrder(@Body() $body, @Req() $req, @Res() $res) {
    try {
      console.log('sent order ! ', $body);
      if ($body.id) {
        $body.id = await parseInt($body.id.toString());
      }

      let menuOrder = await Object.assign({}, $body);
      menuOrder = await this.menuOrderService.saveOne(menuOrder);

      let order: any = await $body.order.map(obj => {
        obj.username = $body.username;
        obj.menuOrder = menuOrder.id;
        obj.price = $body.price;
        this.orderService.save(obj);
      });
      console.log('before save ................. ', order);

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
          menuOrder: `${id}`,
          // isDisable: false,
        },
        relations: [],
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }
}
