import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from 'src/notes/schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async findById(noteId: string) {
    const note = await this.noteModel.findById(noteId);
    if (!note) {
      throw new BadRequestException('this note is not exist');
    }
    return {
      message: 'found the note',
      note,
    };
  }

  async findByUserId(userId) {
    const notes = await this.noteModel.find({ userId });

    return {
      message: 'find notes',
      notes,
    };
  }
  async create(dto: CreateNoteDto, userId: string) {
    const isExistNote = await this.noteModel.findOne({ title: dto.title });
    if (isExistNote) {
      throw new BadRequestException('title is already used');
    }
    const newNote = new this.noteModel({ ...dto, userId });
    await newNote.save();
    return {
      message: 'created',
      note: newNote,
    };
  }

  async update(dto: CreateNoteDto, userId: string, noteId: string) {
    const note = await this.noteModel.findById(noteId);
    if (!note) {
      throw new NotFoundException('this note is not exist');
    }

    if (userId !== note.userId._id.toString()) {
      throw new UnauthorizedException("you don't have access to note");
    }
    await this.noteModel.findByIdAndUpdate(noteId, dto, { new: true });
    return {
      success: true,
    };
  }

  async delete(noteId: string, userId: string) {
    const note = await this.noteModel.findById(noteId);
    if (!note) {
      throw new BadRequestException('this note is not exist');
    }

    if (userId !== note.userId._id.toString()) {
      throw new UnauthorizedException("you don't have access to note");
    }
    await this.noteModel.findByIdAndDelete(noteId);

    return {
      success: true,
    };
  }
}
