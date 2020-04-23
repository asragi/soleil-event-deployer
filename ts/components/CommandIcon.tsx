import React from 'react';
import Styled from 'styled-components';
import { BoxButton } from './GeneralComponent';

// #region styled
const Icon = Styled.img`
    width: 100%;
`;
const BButton = Styled(BoxButton)`
    margin: 0 4px 4px 0;
`;
// #endregion

interface IProps {
    onClick?: () => void;
    src?: string;
}

export class CommandIcon extends React.Component<IProps, {}> {
    public render() {
        return(
            <BButton onClick={this.props.onClick}>
                <Icon src={this.props.src} />
            </BButton>
        );
    }
}
