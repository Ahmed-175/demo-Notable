/// <reference types="jest" />

import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Auth Module (E2E)', () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('POST /auth/register  should create user', async () => {
    const res = await request(app.getHttpServer()).post('/auth/register').send({
      username: 'testuser',
      email: 'test@test.com',
      password: '123456',
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
  });

  it('POST /auth/login should return token', async () => {
    const res = await request(app.getHttpServer()).post('/auth/login').send({
      email: 'test@test.com',
      password: '123456',
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('GET /auth/me  should return user data', async () => {
    const res = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('email');
  });

  // clean up
  afterAll(async () => {
    await app.close();
  });
});
