
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface User {
    userId: number;
    name?: Nullable<string>;
    email: string;
    password: string;
    trainings?: Nullable<Training[]>;
}

export interface Category {
    categoryId: number;
    name?: Nullable<string>;
    exercises?: Nullable<CategoryToExercise[]>;
}

export interface Exercise {
    exerciseID: number;
    name?: Nullable<string>;
    img?: Nullable<string>;
    categories?: Nullable<CategoryToExercise[]>;
    trainings?: Nullable<TrainingToExercise[]>;
}

export interface Training {
    id: number;
    user: User;
    exercises?: Nullable<TrainingToExercise[]>;
}

export interface CategoryToExercise {
    categoryIdReference: number;
    exerciseIdReference: number;
    category: Category;
    exercise: Exercise;
}

export interface TrainingToExercise {
    training: Training;
    exercise: Exercise;
}

export interface IQuery {
    user(userId?: Nullable<number>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
