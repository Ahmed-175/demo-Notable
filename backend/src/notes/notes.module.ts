import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, noteSchema } from 'src/notes/schemas/note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: noteSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
  exports : [NotesService]
})
export class NotesModule {}
