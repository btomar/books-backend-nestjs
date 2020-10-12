import { Document } from 'mongoose';

export interface IBook extends Document {
  readonly _id: string;
  readonly author: string,
  readonly country: string,
  readonly imageLink: string,
  readonly language: string,
  readonly link: string,
  readonly pages: number,
  readonly title: string,
  readonly year: number
}