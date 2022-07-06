import { axios } from "../utils/adminAxios.utils";
import {
  LoginParams,
  AdminDetailParams,
} from "../interfaces/admin-api.interface";

export class AdminApiService {
  async login(dataForm: any) {
    const response = await axios.post<LoginParams>("/signin", dataForm, {
      withCredentials: true,
    });

    return response.data.data.message;
  }

  async register(dataForm: any) {
    const response = await axios.post<AdminDetailParams>("/", dataForm, {
      withCredentials: true,
    });

    return response.data.data;
  }

  async resitPassword(dataForm: any) {
    const response = await axios.post<AdminDetailParams>(
      "/password-reset",
      dataForm,
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  }
}
