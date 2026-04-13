import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginAuthDto } from './dto/login-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() dto: RegisterAuthDto) {
    return this.usersService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginAuthDto) {
    return this.usersService.checkUser(dto);
  }

  @Get('me')
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  async profile(@Request() req) {
    return req.user;
  }
}
