import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/home/HomePage';
import { RegistrationPage } from '../pages/registration/RegistrationPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
//
export default App;
