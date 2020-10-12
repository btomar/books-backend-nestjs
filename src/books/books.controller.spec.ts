import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('BooksController', () => {
  let controller: BooksController;
  let booksService: BooksService;
  let app: TestingModule;

  beforeAll(async () => {
    const ApiController = {
      provide: BooksController,
    };
    app = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();
    booksService = app.get(BooksService);
    controller = app.get(BooksController);
  });

  afterEach(() => {
    jest.resetAllMocks();
 });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
