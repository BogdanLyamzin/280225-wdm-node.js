export default User;
declare const User: import("mongoose").Model<{
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=User.d.ts.map