import type { IUser } from "./user.type";

export interface IAuth {
    success : boolean ;
    user : IUser;
    token : string
}