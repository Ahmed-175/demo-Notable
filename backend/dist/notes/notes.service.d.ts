import { Model } from 'mongoose';
import { Note } from "./schemas/note.schema";
import { CreateNoteDto } from './dto/create-note.dto';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    findById(noteId: string): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, Note, {}, import("mongoose").DefaultSchemaOptions> & Note & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
    findByUserId(userId: any): Promise<{
        message: string;
        notes: (import("mongoose").Document<unknown, {}, Note, {}, import("mongoose").DefaultSchemaOptions> & Note & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    create(dto: CreateNoteDto, userId: string): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, Note, {}, import("mongoose").DefaultSchemaOptions> & Note & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
    update(dto: CreateNoteDto, userId: string, noteId: string): Promise<{
        success: boolean;
    }>;
    delete(noteId: string, userId: string): Promise<{
        success: boolean;
    }>;
}
