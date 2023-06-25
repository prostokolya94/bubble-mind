import { useReducer } from 'react';
import { RegistrationPageWrapper } from './styled';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ActionType } from 'shared/type/User';
import { initUser, registration, userReducer } from '../model/RegistrationPage';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';

const RegistrationPage = () => {
    const [userState, setUserState] = useReducer(userReducer, initUser);
    const navigate = useNavigate();

    return (
        <RegistrationPageWrapper>
            <Typography>First Name</Typography>
            <TextField value={userState.firstName} onChange={(e) => setUserState({ type: ActionType.SET_FIRST_NAME, firstName: e.target.value })} />
            <Typography>Last Name</Typography>
            <TextField value={userState.lastName} onChange={(e) => setUserState({ type: ActionType.SET_LAST_NAME, lastName: e.target.value })} />
            <Typography>Male</Typography>
            <Select
                style={{ width: '223px' }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={userState.male}
                onChange={(e) => setUserState({ type: ActionType.SET_MALE, male: e.target.value })}
            >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
            </Select>
            <Typography>Age</Typography>
            <TextField type='number' value={userState.age} onChange={(e) => setUserState({ type: ActionType.SET_AGE, age: +e.target.value })} />
            <Button
                onClick={(e) => {
                    registration(userState, navigate);
                }}
            >
                Registration
            </Button>
        </RegistrationPageWrapper>
    );
};

export default observer(RegistrationPage);
