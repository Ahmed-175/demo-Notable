import { RegisterAuthDto } from './dto/register-user.dto';
import { UsersService } from "../users/users.service";
import { LoginAuthDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(dto: RegisterAuthDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../users/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        token: string;
    }>;
    login(dto: LoginAuthDto): Promise<{
        message: string;
        user: import("mongoose").Document<unknown, {}, import("../users/schemas/user.schema").User, {}, import("mongoose").DefaultSchemaOptions> & import("../users/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
        token: string;
    }>;
    profile(req: any): Promise<any>;
}
