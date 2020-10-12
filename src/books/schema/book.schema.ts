import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  id: String,
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number
});