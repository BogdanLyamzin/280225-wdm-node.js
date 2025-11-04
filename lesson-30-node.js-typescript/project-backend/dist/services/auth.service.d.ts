export function findUser(query: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
}) | null, import("mongoose").Document<unknown, {}, {
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
}, {}, {
    username: string;
    email: string;
    password: string;
    verify: boolean;
    token?: string | null;
} & import("mongoose").DefaultTimestampProps, "findOne", {}>;
export function register(payload: any): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
export function verifyUser({ token }: {
    token: any;
}): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
export function login({ email, password }: {
    email: any;
    password: any;
}): Promise<{
    token: any;
    user: {
        email: string;
        username: string;
    };
}>;
export function resetPassword({ email }: {
    email: any;
}): Promise<{
    message: string;
}>;
export function refreshSession(user: any): Promise<{
    token: any;
    user: {
        email: any;
        username: any;
    };
}>;
export function logout({ email }: {
    email: any;
}): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
//# sourceMappingURL=auth.service.d.ts.map