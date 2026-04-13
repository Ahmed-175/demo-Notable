import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';

@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('create')
  async createNote(@Request() req, @Body() body: CreateNoteDto) {
    return await this.notesService.create(body, req.user._id);
  }

  @Delete(':id')
  async deleteNote(@Request() req, @Param('id') id: string) {
    return await this.notesService.delete(id, req.user._id.toString());
  }

  @Put(':id')
  async editNote(
    @Request() req,
    @Param('id') id: string,
    @Body() body: CreateNoteDto,
  ) {
    return await this.notesService.update(body, req.user._id.toString(), id);
  }
  @Get(':id')
  async getNote(@Param('id') id: string) {
    return await this.notesService.findById(id);
  }
}
