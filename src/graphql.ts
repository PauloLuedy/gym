
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

export interface ExerciseCategory {
    id?: Nullable<number>;
    categoryId: number;
    exerciseId: number;
    category: Category;
}

export interface Exercise {
    id: number;
    name: string;
    img?: Nullable<string>;
    categories: ExerciseCategory[];
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

export interface Training {
    id?: Nullable<number>;
    type?: Nullable<string>;
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
