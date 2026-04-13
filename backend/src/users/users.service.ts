import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterAuthDto } from 'src/auth/dto/register-user.dto';
import { PasswordService } from 'src/common/utils/hashing.util';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from 'src/auth/dto/login-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(dto: RegisterAuthDto) {
    const exitingUser = await this.userModel.findOne({ email: dto.email });
    if (exitingUser) {
      throw new BadRequestException('User already exist ');
    }
    const passwordHashed = await this.passwordService.hash(dto.password);
    const newUser = new this.userModel({
      ...dto,
      password: passwordHashed,
    });
    await newUser.save();
    const token = this.jwtService.sign(
      { sub: newUser._id },
      {
        secret: process.env.JWT_SECRET,
      },
    );
    return {
      message: 'User created successfully',
      user: newUser,
      token: token,
    };
  }

  async findById(id: string) {
    const user = this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not exist ');
    }

    return user;
  }

  async checkUser(dto: LoginAuthDto) {
    const user = await this.userModel
      .findOne({ email: dto.email })
      .select('+password');
    if (!user) {
      throw new BadRequestException('User not exist');
    }

    const isCorrectPassword = await this.passwordService.compare(
      dto.password,
      user.password,
    );
    if (isCorrectPassword) {
      const token = this.jwtService.sign(
        { sub: user._id },
        {
          secret: process.env.JWT_SECRET,
        },
      );

      return {
        message: 'Login success',
        user,
        token,
      };
    }

    throw new BadRequestException('Password is Wrong');
  }
}
