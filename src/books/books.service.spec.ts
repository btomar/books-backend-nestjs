import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
class ApiServiceMock {
  getAll() {
    return [
      {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      }
    ]    
  }
} 

describe('BooksService', () => {
  let app: TestingModule;
  let booksService: BooksService;


 beforeAll(async () => {
  const ApiServiceProvider = {
    provide: BooksService,
    useClass: ApiServiceMock,
  };
  app = await Test.createTestingModule({
    providers: [BooksService, ApiServiceProvider],
  }).compile();
  booksService = app.get<BooksService>(BooksService);
});

  it('should be defined', () => {
    expect(booksService).toBeDefined();
  });

  it('should get books', async () => {
    const expectedBooks = [
      {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      }
    ] ;
    const gpa = await booksService.getAll();

    expect(gpa).toEqual(expectedBooks);
  });
});

