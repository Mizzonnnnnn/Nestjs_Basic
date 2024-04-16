import { Controller, Get, Render, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller() // ko dinh dang route vi ta muon file app phai la file home => /
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService
  ) { }

  @Post() // route " " /=> (restful)
  @Render("home")
  handleHomePage() {
    // port from .env
    console.log(">>> Ccheck port: ", this.configService.get<string>("PORT"));
    const message = this.appService.getHello();
    return {
      message: message
    }
  }

}
