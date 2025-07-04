export interface IUser {
  _id: string;
  email: string;
  userName: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserParams extends IBaseParams {
  userName:string;
  createdAt:Date;
  email:string;
  updatedAt:Date;
}


