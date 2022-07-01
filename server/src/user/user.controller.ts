import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from 'src/common/decorators/user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('nicknameCheck')
  async nicknameCheck(@Body() body) {
    return await this.userService.isValidNickname(body.nickname);
  }

  @Post('emailCheck')
  async emailCheck(@Body() body) {
    return await this.userService.isValidEmail(body.email);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user: UserEntity) {
    console.log(user);
    return user;
    // return await this.userService.login(body.email, body.password);
  }
}
