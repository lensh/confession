import { Controller, Post, Response, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/api/getLink')
  async getLink(@Body() body, @Response() res) {
    const { you, ta, valid_month, words } = body
    const result = await this.appService.getLink({ you, ta, valid_month, words });
    res.json(result)
  }
}
