export type User = {
    id: number;
    male: string;
    age: number;
    firstName: string;
    lastName: string;
};

export enum ActionType {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_AGE,
    SET_MALE,
}
export type UserAction =
    | { type: ActionType.SET_FIRST_NAME; firstName: string }
    | { type: ActionType.SET_LAST_NAME; lastName: string }
    | { type: ActionType.SET_AGE; age: number }
    | { type: ActionType.SET_MALE; male: string };
