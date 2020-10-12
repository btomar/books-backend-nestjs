import { IBook } from './books.interface';

export interface IBooksService {
  getAll(): Promise<IBook[]>;
  findById(ID: string): Promise<IBook | null>;
  find(options: string): Promise<IBook | null>;
  addBook(books: IBook): Promise<IBook | null>;
  updateBook(ID: string, newValue: IBook): Promise<IBook | null>;
  deleteBook(ID: string): Promise<string | null>;
}