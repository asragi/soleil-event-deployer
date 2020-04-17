import React from 'react';
import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';

// #region styled
const BoxIcon = Styled.button`
    width: 32px;
    height: 32px;
    margin: 0 4px 4px 0;
    background-color: #000000;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
`;

const Icon = Styled.img`
    width: 100%;
`;
// #endregion 

interface IProps {
    onClick?: () => void;
    src?: string;
}

export class CommandIcon extends React.Component<IProps, {}> {
    public render() {
        return(
            <BoxIcon onClick={this.props.onClick}>
                <Icon src={this.props.src} />
            </BoxIcon>
        );
    }
}
