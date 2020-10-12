import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeAll(done => {
    done()
  })
  
  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    //mongoose.connection.close()
    done()
    app.close()
  })

  it('/ (GET)', (done) => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('World Literature Top 100 Books')
      .end(done);
  });
});
