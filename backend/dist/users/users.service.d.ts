import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterAuthDto } from "../auth/dto/register-user.dto";
import { PasswordService } from "../common/utils/hashing.util";
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from "../auth/dto/login-user.dto";
export declare class UsersService {
    private userModel;
    private readonly jwtService;
    private readonly passwordService;
    constructor(userModel: Model<User>, jwtService: JwtService, passwordService: PasswordService);
    create(dto: RegisterAuthDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        token: string;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    checkUser(dto: LoginAuthDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        token: string;
    }>;
}
