export default Category;
declare const Category: import("mongoose").Model<{
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    name: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=Category.d.ts.map