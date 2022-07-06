export interface LoginParams {
  data: {
    message: string;
  };
}

export interface AdminDetailParams {
  data: {
    id: number;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
  };
}
