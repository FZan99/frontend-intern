import { axios } from "../utils/publicAxios.utils";
import {
  BookParams,
  GetBookParams,
  UpdateBookParams,
  LoanParams,
  GetLoanParams,
  FineParams,
  GetFineParams,
} from "../interfaces/public-api.interface";
import Qs from "qs";

export class PublicApiService {
  async registerBook(dataForm: any) {
    const response = await axios.post<BookParams>("/books", dataForm, {
      withCredentials: true,
    });

    return response.data;
  }

  getBook(params: GetBookParams) {
    const {filter, sort, page} = params;
    const response = axios.get<BookParams>("/books", {
      params: {
        sort,
        filter,
        page: page,
        limit: 4,
      },
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      withCredentials: true,
    });

    return response
  }

  async getBookById(bookId: number) {
    const response = await axios.get<BookParams>("/books/" + bookId, {
      withCredentials: true,
    });

    return response.data;
  }

  async updateBook(params: UpdateBookParams) {
    const {dataForm, bookId} = params;
    const response = await axios.put<BookParams>("/books/" + bookId, dataForm, {
      withCredentials: true,
    });

    return response.data;
  }

  async deleteBook(bookId: number) {
    const response = await axios.delete<BookParams>("/books/" + bookId, {
      withCredentials: true,
    });

    return response.data;
  }

  async createLoan(dataForm: any) {
    const response = await axios.post<LoanParams>("/loans", dataForm, {
      withCredentials: true,
    });

    return response.data;
  }

  async getLoan(params: GetLoanParams) {
    const {userId, page} = params;
    const response = await axios.get<LoanParams>("/loans", {
      params: {
        userId: userId,
        page: page,
        limit: 4,
      },
      withCredentials: true,
    });

    return response.data.data.items;
  }

  async deleteLoan(loanId: number) {
    const response = await axios.get<LoanParams>("/loans/" + loanId, {
      withCredentials: true,
    });

    return response.data;
  }

  async createFine(dataForm: any) {
    const response = await axios.post<FineParams>("/fines", dataForm, {
      withCredentials: true,
    });

    return response.data;
  }

  async getFine(params: GetFineParams) {
    const {loanId, page} =params;
    const response = await axios.get<FineParams>("/fines/" + loanId, {
      params: {
        page: page,
        limit: 4,
      },
      withCredentials: true,
    });

    return response.data.data.items;
  }

  async deleteFine(loanId: number) {
    const response = await axios.delete<FineParams>("/fines/" + loanId, {
      withCredentials: true,
    });

    return response.data;
  }
}
