import { axios } from "../utils/userAxios.utils";
import {
  LoginParams,
  UserDetailParams,
} from "../interfaces/user-api.interface";

export class UserApiService {
  async login(dataForm: any) {
    const response = await axios.post<LoginParams>("/signin", dataForm, {
      withCredentials: true,
    });

    return response.data.data.message;
  }

  async register(dataForm: any) {
    const response = await axios.post<UserDetailParams>("/", dataForm, {
      withCredentials: true,
    });

    return response.data.data;
  }

  async resitPassword(dataForm: any) {
    const response = await axios.post<UserDetailParams>(
      "/password-reset",
      dataForm,
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  }
}
