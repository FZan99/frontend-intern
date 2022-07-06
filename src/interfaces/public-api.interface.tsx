export interface BookParams {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  description: string;
  ISBN: string;
  createdBy: number;
  updatedAt: string;
   data:{
    items: [],
    pagination:{
      totalPages: Number
    }
  }
  
}

export interface LoanParams {
  id: number;
  bookId: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  data:{
    items: [],
  }
}

export interface FineParams {
  value: string;
  loanId: number;
  createdAt: string;
  updatedAt: string;
  data:{
    items: [],
  }
}

export type GetBookParams = {
  filter: any;
  sort: any;
  page: number;
}

export type UpdateBookParams = {
  dataForm: any;
  bookId: number;
}

export type GetLoanParams = {
  userId: number; 
  page: number;
}

export type GetFineParams = {
  loanId: number;
  page: number;
}
