import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    const secert = process.env.JWT_SECRET;
    if (!secert) {
      throw new Error('JWT_SECRET is not defined');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secert,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findById(payload.sub);

    return user;
  }
}
