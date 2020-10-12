import { Controller, Get, Response, HttpStatus, Param, Query, Body, Post, Request, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDto } from './dto/addBook.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor (private readonly booksService: BooksService) {}

  @Get()
  public async getBooks(@Response() res) {
    const books = await this.booksService.getAll();
    return res.status(HttpStatus.OK).json(books);
  }

  @Get('search')
    public async findBook(@Response() res, @Request() req) {
        const queryCondition = req.query.data;
        const books = await this.booksService.find(queryCondition);
        return res.status(HttpStatus.OK).json(books);
    }

  @Get('/:id')
    public async findById(@Response() res, @Param() param){
        const book = await this.booksService.findById(param.id);
        return res.status(HttpStatus.OK).json(book);
    }
    
  @Post()
    @ApiResponse({ status: 201, description: 'The book has been successfully added.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async addBook(@Response() res, @Body() addBookDto: AddBookDto) {

        const msg = await this.booksService.addBook(addBookDto);
        return res.status(HttpStatus.OK).json(msg);
    }
  
  @Put('/:id')
    public async updateBook(@Param() param, @Response() res, @Body() body) {

        const book = await this.booksService.updateBook(param.id, body);
        return res.status(HttpStatus.OK).json(book);
    }

  @Delete('/:id')
    public async deleteBook(@Param() param, @Response() res) {

        const msg = await this.booksService.deleteBook(param.id);
        return res.status(HttpStatus.OK).json(msg);
    }
}
