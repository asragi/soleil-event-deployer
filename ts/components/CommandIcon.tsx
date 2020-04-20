import React from 'react';
import Styled from 'styled-components';
import { BoxButton } from './GeneralComponent';

// #region styled
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
            <BoxButton onClick={this.props.onClick}>
                <Icon src={this.props.src} />
            </BoxButton>
        );
    }
}
