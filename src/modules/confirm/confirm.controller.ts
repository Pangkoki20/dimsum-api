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
import { ConfirmService } from './confirm.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AppConfigure } from '../../configures/global.configure';
import { AuthGuard } from '@nestjs/passport';

var sha512 = require('js-sha512');
import * as jwt from 'jsonwebtoken';

// import { diskStorage } from 'multer';
// import * as path from 'path';
// import * as _ from 'lodash';

@ApiUseTags('confirm')
@Controller('confirm')
export class ConfirmController {
  constructor(private readonly confirmService: ConfirmService) {}
  @Get()
  async findAll(@Req() $req, @Res() $res) {
    try {
      let where = await `confirm.isDisable = false`;
      let relations = await [];
      let confirm = await [];

      let confirmData = await this.confirmService.queryBuilder(
        where,
        // relations,
        // confirm,
      );

      await $res.status(HttpStatus.OK).json(confirmData);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get('allusers')
  async findAllusers(@Req() $req, @Res() $res) {
    try {
      let where = await `confirm.isDisable = false && confirm.role = 'confirm' `;
      let relations = await [];
      let  = await [];
      let confirmData = await this.confirmService.queryBuilder(
        where,
        // relations,
        // ,
      );

      await $res.status(HttpStatus.OK).json(confirmData);
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

      let confirm = await Object.assign({}, $body);

      confirm = await this.confirmService.saveOne(confirm);
      await $res.status(HttpStatus.OK).json(confirm);
    } catch ($ex) {
      await $res
        .status(HttpStatus.OK)
        .json({ message: 'Please fill password to same of both' });
    }
  }
}
