
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
}

export interface User {
    id: number;
    email: string;
    name?: Nullable<string>;
}

export interface IQuery {
    allUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

type Nullable<T> = T | null;
