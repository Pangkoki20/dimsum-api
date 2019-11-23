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
import { MenuService } from './menu.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AppConfigure } from '../../configures/global.configure';
import { AuthGuard } from '@nestjs/passport';

var sha512 = require('js-sha512');
import * as jwt from 'jsonwebtoken';

// import { diskStorage } from 'multer';
// import * as path from 'path';
// import * as _ from 'lodash';

@ApiUseTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @Get()
  async findAll(@Req() $req, @Res() $res) {
    try {
      let where = await `menu.isDisable = false`;
      let relations = await [];
      let menu = await [];

      let menuData = await this.menuService.queryBuilder(
        where,
        // relations,
        // menu,
      );

      await $res.status(HttpStatus.OK).json(menuData);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get('allusers')
  async findAllusers(@Req() $req, @Res() $res) {
    try {
      let where = await`menu.isDisable = false && menu.role = 'menu' `;
      let relations = await [];
      let order = await [];
      let menuData = await this.menuService.queryBuilder(
        where,
        // relations,
        // order,
      );

      await $res.status(HttpStatus.OK).json(menuData);
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

      let menu = await Object.assign({}, $body);

      menu = await this.menuService.saveOne(menu);
      await $res.status(HttpStatus.OK).json(menu);
    } catch ($ex) {
      await $res
        .status(HttpStatus.OK)
        .json({ message: 'Please fill password to same of both' });
    }
  }
}
