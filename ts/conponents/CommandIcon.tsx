import React from 'react';
import Styled from 'styled-components';

// #region styled
const BoxIcon = Styled.button`
    width: 32px;
    height: 32px;
    margin: 0 4px 4px 0;
    background-color: #FF0000;
`;

// #endregion 
export class CommandIcon extends React.Component<{}, {}> {
    public render() {
        return(
            <BoxIcon />
        );
    }
}
