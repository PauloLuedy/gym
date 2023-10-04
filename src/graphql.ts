
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

export interface Limb {
    id: number;
    description: string;
    sub?: Nullable<JSON>;
}

export interface Exercise {
    name?: Nullable<string>;
    tipo?: Nullable<string>;
    leg?: Nullable<Limb>;
    arm?: Nullable<Limb>;
}

export interface IQuery {
    allExercises(): Exercise | Promise<Exercise>;
    allUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export interface User {
    id: number;
    email: string;
    name?: Nullable<string>;
}

export type JSON = any;
type Nullable<T> = T | null;
