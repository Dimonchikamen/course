export type User = {
    id: string;
    login: string;
};

export type UserSchema = {
    authData?: User;
};
