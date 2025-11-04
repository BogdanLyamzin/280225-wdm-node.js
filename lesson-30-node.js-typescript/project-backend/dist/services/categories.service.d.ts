export function getCategories(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, "find", {}>;
export function getCategoriesWithDetails(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, "find", {}>;
export function addCategory(payload: any): Promise<import("mongoose").Document<unknown, {}, {
    name: string;
} & import("mongoose").DefaultTimestampProps, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    name: string;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}>;
//# sourceMappingURL=categories.service.d.ts.map