"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const note_schema_1 = require("./schemas/note.schema");
let NotesService = class NotesService {
    noteModel;
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async findById(noteId) {
        const note = await this.noteModel.findById(noteId);
        if (!note) {
            throw new common_1.BadRequestException('this note is not exist');
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
    async create(dto, userId) {
        const isExistNote = await this.noteModel.findOne({ title: dto.title });
        if (isExistNote) {
            throw new common_1.BadRequestException('title is already used');
        }
        const newNote = new this.noteModel({ ...dto, userId });
        await newNote.save();
        return {
            message: 'created',
            note: newNote,
        };
    }
    async update(dto, userId, noteId) {
        const note = await this.noteModel.findById(noteId);
        if (!note) {
            throw new common_1.NotFoundException('this note is not exist');
        }
        if (userId !== note.userId._id.toString()) {
            throw new common_1.UnauthorizedException("you don't have access to note");
        }
        await this.noteModel.findByIdAndUpdate(noteId, dto, { new: true });
        return {
            success: true,
        };
    }
    async delete(noteId, userId) {
        const note = await this.noteModel.findById(noteId);
        if (!note) {
            throw new common_1.BadRequestException('this note is not exist');
        }
        if (userId !== note.userId._id.toString()) {
            throw new common_1.UnauthorizedException("you don't have access to note");
        }
        await this.noteModel.findByIdAndDelete(noteId);
        return {
            success: true,
        };
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesService);
//# sourceMappingURL=notes.service.js.map