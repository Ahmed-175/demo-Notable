import mongoose from 'mongoose';
export declare class Note {
    userId: mongoose.Types.ObjectId;
    title: string;
    content: string;
    tags: string[];
}
export declare const noteSchema: mongoose.Schema<Note, mongoose.Model<Note, any, any, any, any, any, Note>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Note, mongoose.Document<unknown, {}, Note, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<Note & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    userId?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, Note, mongoose.Document<unknown, {}, Note, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Note & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: mongoose.SchemaDefinitionProperty<string, Note, mongoose.Document<unknown, {}, Note, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Note & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: mongoose.SchemaDefinitionProperty<string, Note, mongoose.Document<unknown, {}, Note, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Note & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: mongoose.SchemaDefinitionProperty<string[], Note, mongoose.Document<unknown, {}, Note, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<Note & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Note>;
