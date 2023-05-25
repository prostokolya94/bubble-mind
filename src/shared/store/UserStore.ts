import { makeAutoObservable } from 'mobx';
import { User } from '../type/User';

export class UserStore {
    private _user: User | null = null;

    public get user(): User | null {
        return this._user;
    }
    public set user(value: User | null) {
        this._user = value;
    }

    constructor() {
        makeAutoObservable(this);
    }
}
