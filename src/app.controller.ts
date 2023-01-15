import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MeasureResponseInterceptor } from './MeasureResponse.interceptor';

@Controller()
@UseInterceptors(MeasureResponseInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
