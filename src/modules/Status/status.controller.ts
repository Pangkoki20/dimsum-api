import {
  Controller,
  Req,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { ApiUseTags } from '@nestjs/swagger';

import { diskStorage } from 'multer';
import * as path from 'path';
import * as _ from 'lodash';
import { ObjectUnsubscribedError } from 'rxjs';

@ApiUseTags('status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  async find(@Body() $body, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      let result = await this.statusService.find({
        where: { isDisable: false },
        // relations: ['order'],
        // status: { id: 'DESC' },
      });

      await $res.status(HttpStatus.OK).json(result);
    } catch ($ex) {
      await $res.status(HttpStatus.OK).json({ message: 'Error' });
    }
  }

  @Get(':id')
  async findStatus(@Param('id') id, @Req() $req, @Res() $res) {
    try {
      // let result = await this.lessonService.find({ relations: ['lesson'] });
      console.log('Status id = ', id);

      let result = await this.statusService.find({
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
