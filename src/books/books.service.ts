import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {IBook, IBooksService} from './interfaces';
import { AddBookDto } from './dto/addBook.dto';
import { debug } from 'console';

@Injectable()
export class BooksService implements IBooksService {
  constructor(@InjectModel('Books') private readonly bookModel: Model<IBook>) {}

  async getAll(): Promise<IBook[]> {
    return await this.bookModel.find().exec();
  }

  async findById(ID: string): Promise<IBook> {
    return await this.bookModel.findById(ID).exec();
  }

  async find(query: string): Promise<any> {
    return await this.bookModel.findOne({
      author: query
      // author: query.toLowerCase(),
      // country: query.toLowerCase()
    }, (err, doc) => {
      if(err) {
        console.log(err);
      }
      return doc;
    });
  }

  async addBook(addBookDto: AddBookDto): Promise<IBook> {
    const addedBook = new this.bookModel(addBookDto);
    return await addedBook.save();
  }

  async updateBook(ID: string, newValue: IBook): Promise<IBook> {
    const book = await this.bookModel.findById(ID).exec();

    if (!book._id) {
        debug('book not found');
    }
    await this.bookModel.findByIdAndUpdate(ID, newValue).exec();
    return await this.bookModel.findById(ID).exec();
  }

  async deleteBook(ID: string): Promise<string> {
    try {
        await this.bookModel.findByIdAndRemove(ID).exec();
        return 'The book has been deleted';
    }
    catch (err){
        debug(err);
        return 'The book could not be deleted';
    }
}
}
