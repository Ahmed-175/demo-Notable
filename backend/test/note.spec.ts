/// <reference types="jest" />
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';

describe('Note Moudle E2E Testing', () => {
  let app: INestApplication;
  let token: string;
  let noteId: string;

  beforeAll(async () => {
    const modeuleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = modeuleRef.createNestApplication();
    await app.init();
  });

  it('Register to NewUser  auth/register', async () => {
    const res = await request(app.getHttpServer()).post('/auth/register').send({
      username: 'createNoteUser',
      email: 'newNoteUser@gmail.com',
      password: '123456',
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('Create Note E2E Test notes/create', async () => {
    const res = await request(app.getHttpServer())
      .post('/notes/create')
      .send({
        title: 'Hello world',
        content: 'welcome to the first test e2e',
        tags: ['chess', 'ai', 'mern'],
      })
      .set({
        authorization: `Bearer ${token}`,
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('note');

    noteId = res.body.note?._id;
  });

  it('Get Note by Id notes/:id', async () => {
    const res = await request(app.getHttpServer())
      .get(`/notes/${noteId}`)
      .set({
        authorization: `Bearer ${token}`,
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('note');
    expect(res.body).toHaveProperty('message');
  });
  it('Update Note  notes/:id/edit ', async () => {
    const res = await request(app.getHttpServer())
      .put(`/notes/${noteId}`)
      .send({
        title: 'Test editable',
        content: 'like me',
        tags: ['full system desgin'],
      })
      .set({
        authorization: `Bearer ${token}`,
      });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success');
  });

  it('Delete Note  notes/:id/delete', async () => {
    const res = await request(app.getHttpServer())
      .delete(`/notes/${noteId}`)
      .set({
        authorization: `Bearer ${token}`,
      });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success');
  });
});
