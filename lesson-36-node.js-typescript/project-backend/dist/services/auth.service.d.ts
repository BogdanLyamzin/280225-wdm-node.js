import { UserDocument } from "../db/models/User";
interface RegisterPayload {
    username: string;
    email: string;
    password: string;
}
interface LoginPayload {
    email: string;
    password: string;
}
interface VerifyPayload {
    token: string;
}
interface ResetPasswordPayload {
    email: string;
}
interface LoginResult {
    token: string;
    user: {
        username: string;
        email: string;
    };
}
interface ResetPasswordResult {
    message: string;
}
type FindUserResult = UserDocument | null;
export declare const findUser: (query: any) => FindUserResult;
export declare const register: (payload: RegisterPayload) => Promise<UserDocument>;
export declare const verifyUser: ({ token, }: VerifyPayload) => Promise<UserDocument>;
export declare const login: ({ email, password, }: LoginPayload) => Promise<LoginResult>;
export declare const resetPassword: ({ email, }: ResetPasswordPayload) => Promise<ResetPasswordResult>;
export declare const refreshSession: (user: UserDocument) => Promise<LoginResult>;
export declare const logout: ({ email, }: UserDocument) => Promise<UserDocument>;
export {};
//# sourceMappingURL=auth.service.d.ts.map