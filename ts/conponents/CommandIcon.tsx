import React from 'react'
import Styled from 'styled-components'

// #region styled
const BoxIcon = Styled.button`
    width: 32px;
    height: 32px;
    margin: 4px;
    background-color: #FF0000;
`;

// #endregion 
export class CommandIcon extends React.Component<{}, {}> {
    public render() {
        return(
            <BoxIcon />
        )
    }
}
