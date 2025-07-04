import { authRoutes } from "../routes/backendRoutes";
import { ISigninValues, ISignResponse, ISignupValues } from "../types/auth";
import axiosInstance from "./base";

class AuthServices {
  async signup(payload: ISignupValues) {
    return await axiosInstance.post<IBaseResponse<ISignResponse>>(
      authRoutes.signup(),
      payload
    );
  }

    async signin(payload: ISigninValues) {
    return await axiosInstance.post<IBaseResponse<ISignResponse>>(
      authRoutes.signin(),
      payload
    );
  }

}


const authServices =  new AuthServices();

export default authServices;
