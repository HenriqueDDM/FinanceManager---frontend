export interface IUser {
  id: string;
  email: string;
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface ICategory {
  title: string;
  id: string;
  created_at: string;
  updated_at: string;
  transactions?: [];
}

export interface ITransaction {
  amount: number;
  created_at: string;
  updated_at: string;
  type: string;
  title: string;
  id: string;
  category: ICategory;
}

export interface IResponseTransactionLoader {
  categories: ICategory[];
  transactions: ITransaction[];
  totalIncome: number;
  totalExpense: number;
}
