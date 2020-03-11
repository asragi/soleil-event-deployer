import React from 'react';
import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';

// #region styled
const BoxIcon = Styled.button`
    width: 32px;
    height: 32px;
    margin: 0 4px 4px 0;
    background-color: ${$DAWN_LIGHT_GOLD};
`;

// #endregion 
export class CommandIcon extends React.Component<{}, {}> {
    public render() {
        return(
            <BoxIcon />
        );
    }
}
