import { FC, useState } from 'react';
import { CloseBubbleWrapper, OpenBubbleWrapper, UserCoreFeatureWrapper } from './styled';
import { changeBubbleVisualMode } from 'shared/util/Utils';

interface IUserCoreFeature {}

export const UserCoreFeature: FC<IUserCoreFeature> = () => {
    const [isBubbleOpen, setIsBubbleOpen] = useState<boolean>(false);

    return (
        <UserCoreFeatureWrapper>
            {isBubbleOpen ? (
                <OpenBubbleWrapper onClick={() => changeBubbleVisualMode(isBubbleOpen, setIsBubbleOpen)}></OpenBubbleWrapper>
            ) : (
                <CloseBubbleWrapper onClick={() => changeBubbleVisualMode(isBubbleOpen, setIsBubbleOpen)}></CloseBubbleWrapper>
            )}
        </UserCoreFeatureWrapper>
    );
};
