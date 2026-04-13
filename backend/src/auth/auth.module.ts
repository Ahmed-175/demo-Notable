import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { NotesService } from 'src/notes/notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, noteSchema } from 'src/notes/schemas/note.schema';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECERT,
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
    MongooseModule.forFeature([{ name: Note.name, schema: noteSchema }]),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, NotesService],
})
export class AuthModule {}
