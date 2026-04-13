import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    createNote(req: any, body: CreateNoteDto): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, import("./schemas/note.schema").Note, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
    deleteNote(req: any, id: string): Promise<{
        success: boolean;
    }>;
    editNote(req: any, id: string, body: CreateNoteDto): Promise<{
        success: boolean;
    }>;
    getNote(id: string): Promise<{
        message: string;
        note: import("mongoose").Document<unknown, {}, import("./schemas/note.schema").Note, {}, import("mongoose").DefaultSchemaOptions> & import("./schemas/note.schema").Note & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        };
    }>;
}
