export default Contact;
declare const Contact: import("mongoose").Model<{
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=Contact.d.ts.map