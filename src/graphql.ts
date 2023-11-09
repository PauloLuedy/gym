
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface CreateTrainingInput {
    userId?: Nullable<number>;
    exercises?: Nullable<Nullable<CreateExerciseInput>[]>;
    categories?: Nullable<Nullable<CreateCategoryToExerciseInput>[]>;
}

export interface CreateExerciseInput {
    exerciseID?: Nullable<number>;
    name?: Nullable<string>;
    img?: Nullable<string>;
    category?: Nullable<CreateCategoryToExerciseInput>;
}

export interface CreateCategoryToExerciseInput {
    categoryIdReference?: Nullable<number>;
    exerciseIdReference?: Nullable<number>;
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
    category?: Nullable<CategoryToExercise[]>;
}

export interface User {
    userId: number;
    name?: Nullable<string>;
    email: string;
    password: string;
    trainings?: Nullable<Training[]>;
}

export interface Training {
    id: number;
    user: User;
    exercises?: Nullable<TrainingToExercise[]>;
    categories?: Nullable<Nullable<TrainingToCategory>[]>;
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

export interface TrainingToCategory {
    training: Training;
    category: Category;
}

export interface Token {
    acess_tokem?: Nullable<string>;
}

export interface IMutation {
    login(email?: Nullable<string>, password?: Nullable<string>): Nullable<Token> | Promise<Nullable<Token>>;
    createTrainings(data?: Nullable<CreateTrainingInput>): Nullable<string> | Promise<Nullable<string>>;
    createUser(data?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface IQuery {
    user(userId?: Nullable<number>): Nullable<User> | Promise<Nullable<User>>;
    findByEmail(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
