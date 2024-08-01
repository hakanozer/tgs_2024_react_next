export interface IUser {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    name: string;
    role: string;
}