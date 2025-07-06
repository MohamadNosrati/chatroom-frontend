export interface IUser {
  _id: string;
  email: string;
  userName: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  iaActive:boolean;
}

export interface IUserParams extends IBaseParams {
  userName:string;
  createdAt:Date;
  email:string;
  updatedAt:Date;
}


