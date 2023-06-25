import { ActionType, User, UserAction } from 'shared/type/User';
import { NavigateFunction } from 'react-router';
import { AuthService } from 'shared/service/AuthService';

export function registration(newUser: User, navigate: NavigateFunction) {
    AuthService.registration(newUser).then((resp) => {
        console.log(resp.data);
    });
    navigate('/');
}

export const initUser: User = {
    age: 0,
    firstName: '',
    lastName: '',
    id: Date.now(),
    male: 'male',
};

export const userReducer = (state: User, action: UserAction): User => {
    switch (action.type) {
        case ActionType.SET_FIRST_NAME:
            return { ...state, firstName: action.firstName };
        case ActionType.SET_LAST_NAME:
            return { ...state, lastName: action.lastName };
        case ActionType.SET_AGE:
            return { ...state, age: action.age };
        case ActionType.SET_MALE:
            return { ...state, male: action.male };
        default:
            throw new Error();
    }
};
