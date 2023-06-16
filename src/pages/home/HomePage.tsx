import { UserCoreFeature } from 'features/userCore/ui/UserCoreFeature';
import React from 'react';
import { HomePageWrapper } from './styled';

interface IHomePage {}

export const HomePage: React.FC<IHomePage> = () => {
    return (
        <HomePageWrapper>
            <UserCoreFeature />
        </HomePageWrapper>
    );
};
