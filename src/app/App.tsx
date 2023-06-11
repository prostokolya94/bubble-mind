import { Route, Routes, useNavigate } from 'react-router';
import { HomePage } from '../pages/home/HomePage';
import { MainWrapper } from './styled';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '..';
import RegistrationPage from '../pages/registration/ui/RegistrationPage';

function checkAuth() {
    let storage = localStorage.getItem('usersStorage');
    let item = localStorage.getItem('user');
    if (item && storage?.includes(item)) {
        userStore.isAuth = true;
    }
}

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (!userStore.isAuth) {
            navigate('/registration');
        }
    }, [userStore.isAuth]);

    return (
        <MainWrapper>
            {userStore.isAuth ? (
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path='/registration' element={<RegistrationPage />} />
                </Routes>
            )}
        </MainWrapper>
    );
}

export default observer(App);
