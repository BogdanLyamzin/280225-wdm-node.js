import { Document } from "mongoose";
export interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token: string | null;
    createdAt: Date;
    updateAt: Date;
}
declare const User: import("mongoose").Model<UserDocument, {}, {}, {}, Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=User.d.ts.map