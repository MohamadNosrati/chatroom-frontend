import { IUser } from "./users"

export interface ISignResponse {
    token:string
    user:IUser
}

export interface ISignupValues {
    email:string;
    userName:string;
    password:string;
}

export interface ISigninValues {
    email:string;
    password:string;
}

export interface Ijwt {
    token?:string;
    userId?:string;
}
