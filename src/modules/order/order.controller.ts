import {
  Controller,
  Req,
  Res,
  HttpStatus,
  Body,
  Get,
  Post,
  Put,
  Param,
  Delete,
  HttpCode,
  UseInterceptors,
  FileInterceptor,
  UploadedFile,
  Request,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AppConfigure } from '../../configures/global.configure';
import { AuthGuard } from '@nestjs/passport';

var sha512 = require('js-sha512');
import * as jwt from 'jsonwebtoken';

// import { diskStorage } from 'multer';
// import * as path from 'path';
// import * as _ from 'lodash';

@ApiUseTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get()
  async findAll(@Req() $req, @Res() $res) {
    try {
      let where = await`order.isDisable = false`;
      let relations = await [];
      let order = await [];

      let orderData = await this.orderService.queryBuilder(
        where,
        // relations,
        // order,
      );

      await $res.status(HttpStatus.OK).json(orderData);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get('allusers')
  async findAllusers(@Req() $req, @Res() $res) {
    try {
      let where = await `order.isDisable = false && order.role = 'order' `;
      let relations = await [];
      let order = await [];
      let orderData = await this.orderService.queryBuilder(
        where,
        // relations,
        // order,
      );

      await $res.status(HttpStatus.OK).json(orderData);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Post('create')
  async createUser(@Body() $body, @Res() $res) {
    try {
      // if ($body.id) {
      //   $body.id = await parseInt($body.id.toString());
      // }
      console.log('ข้อมูลที่ถูกสร้าง --------> ', $body);

      let order = await Object.assign({}, $body);

      order = await this.orderService.saveOne(order);
      await $res.status(HttpStatus.OK).json(order);
    } catch ($ex) {
      await $res
        .status(HttpStatus.OK)
        .json({ message: 'Please fill password to same of both' });
    }
  }
}
