
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserUniqueInput {
    id?: Nullable<number>;
    email?: Nullable<string>;
}

export interface UserCreateInput {
    email: string;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export interface User {
    id: number;
    email: string;
    name?: Nullable<string>;
}

export interface Category {
    id: number;
    name: string;
}

export interface Exercise {
    id: number;
    name: string;
    img?: Nullable<string>;
    category?: Nullable<Category>;
}

export interface Training {
    user?: Nullable<User>;
    exercise?: Nullable<Exercise>;
}

export interface IQuery {
    allUsers(): Nullable<Training[]> | Promise<Nullable<Training[]>>;
}

export interface IMutation {
    createUser(data: UserCreateInput): User | Promise<User>;
}

type Nullable<T> = T | null;
