import { Order } from './order.entity';
import {
  Controller,
  Req,
  Res,
  HttpStatus,
  Body,
  Get,
  Post,
  Param,
  Put,
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

      let newData = await Promise.all(
        result.map(async e => {
          let eachMenu = await this.menuOrderService.find({
            where: {
              order_id: e.id,
              isDisable: false,
            },
            relations: [],
          });
          return {
            ...e,
            allMenu: eachMenu,
          };
        }),
      );
      await $res.status(HttpStatus.OK).json(newData);
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
        obj.value = obj.menu_value;
        obj.user_id = obj.userid;
        obj.isDisable = 0;
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
  @Put('updatebystatus/:id')
  async updateStatus(@Param('id') id, @Body('status') status, @Res() $res) {
    const result = await this.orderService.updateByStatus(id, status);
    if (result) {
      await $res.status(HttpStatus.OK).json(result);
    } else {
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
        order: { id: 'DESC' },
      });

      console.log('Result : ', result);
      let newData = await Promise.all(
        result.map(async e => {
          let eachMenu = await this.menuOrderService.find({
            where: {
              order_id: e.id,
              isDisable: false,
            },
            relations: [],
          });
          return {
            ...e,
            allMenu: eachMenu,
          };
        }),
      );
      console.log('NewData : ', newData);
      let res = {
        allMenu: newData,
      };
      await $res.status(HttpStatus.OK).json(newData);
    } catch ($ex) {
      console.log('error : ', $ex);
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }
}
