import React, { useState } from 'react';
import { RegistrationPageWrapper } from './styled';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { User } from '../../../shared/type/User';
import { dispatchData, saveNewUser } from '../model/RegistrationPage';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [male, setMale] = useState<string>('male');

    const navigate = useNavigate();

    const newUser: User = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        male: male,
    };

    return (
        <RegistrationPageWrapper>
            <Typography>First Name</Typography>
            <TextField value={firstName} onChange={(e) => dispatchData(e, setFirstName)} />
            <Typography>Last Name</Typography>
            <TextField value={lastName} onChange={(e) => dispatchData(e, setLastName)} />
            <Typography>Male</Typography>
            <Select
                style={{ width: '223px' }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={male}
                onChange={(e) => dispatchData(e, setMale)}
            >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
            </Select>
            <Typography>Age</Typography>
            <TextField type='number' value={age} onChange={(e) => dispatchData(e, undefined, setAge)} />
            <Button
                onClick={(e) => {
                    saveNewUser(newUser, navigate);
                }}
            >
                Registration
            </Button>
        </RegistrationPageWrapper>
    );
};

export default observer(RegistrationPage);
