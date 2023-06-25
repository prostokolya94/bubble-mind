import axios, { AxiosResponse } from 'axios';

export class AuthService {
    public static registration<User>(user: User): Promise<AxiosResponse<User>> {
        return axios.post('http://localhost:5000/auth/registration');
    }
}
