import { makeAutoObservable } from 'mobx';
import { User } from '../type/User';

export class UserStore {
    private _user: User | null = null;
    private _isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public get isAuth(): boolean {
        return this._isAuth;
    }
    public set isAuth(value: boolean) {
        this._isAuth = value;
    }
    public get user(): User | null {
        return this._user;
    }
    public set user(value: User | null) {
        this._user = value;
    }
}
