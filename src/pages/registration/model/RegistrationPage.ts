import { SelectChangeEvent } from '@mui/material';
import { User } from '../../../shared/type/User';
import { NavigateFunction } from 'react-router';
import { userStore } from '../../..';

function checkUsersStorage() {
    let usersStorage = localStorage.getItem('usersStorage');
    if (usersStorage !== null) {
        return JSON.parse(usersStorage);
    } else {
        return false;
    }
}

function login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    userStore.isAuth = true;
}

export function dispatchData(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
    setString?: React.Dispatch<React.SetStateAction<string>>,
    setAge?: React.Dispatch<React.SetStateAction<number>>
) {
    if (setString) {
        setString(event.target.value);
    } else if (setAge) {
        setAge(+event.target.value);
    }
}

export function saveNewUser(newUser: User, navigate: NavigateFunction) {
    if (checkUsersStorage() && typeof checkUsersStorage() == 'object') {
        let usersStorage = checkUsersStorage();
        usersStorage.push(newUser);
        localStorage.setItem('usersStorage', JSON.stringify(usersStorage));
    } else {
        localStorage.setItem('usersStorage', JSON.stringify([newUser]));
    }
    login(newUser);
    navigate('/');
}
