export function getContacts(query: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
})[], import("mongoose").Document<unknown, {}, {
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
}, {}, {
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps, "find", {}>;
export function getContactById(id: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
}) | null, import("mongoose").Document<unknown, {}, {
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
}, {}, {
    email: string;
    category: import("mongoose").Types.ObjectId;
    fullname: string;
    phone: string;
    owner: import("mongoose").Types.ObjectId;
    photo?: string | null;
} & import("mongoose").DefaultTimestampProps, "findOne", {}>;
export function addContact(payload: any, file: any): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
export function updateContactById(id: any, payload: any): Promise<(import("mongoose").Document<unknown, {}, {
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
}) | null>;
export function deleteContactById(id: any): Promise<(import("mongoose").Document<unknown, {}, {
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
}) | null>;
//# sourceMappingURL=contacts.service.d.ts.map