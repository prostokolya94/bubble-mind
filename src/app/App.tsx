import { Route, Routes, useNavigate } from 'react-router';
import { HomePage } from '../pages/home/HomePage';
import { RegistrationPage } from '../pages/registration/ui/RegistrationPage';
import { BrowserRouter } from 'react-router-dom';
import { UserStore } from '../shared/store/UserStore';
import { MainWrapper } from './styled';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

function App() {
    const userStore = new UserStore();
    const navigate = useNavigate();

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
//
export default observer(App);
