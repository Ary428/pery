import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() body: { userName: string; language: string }) {
    return this.userService.register(body.userName, body.language);
  }
}
