import React from 'react';
import Styled from 'styled-components';
import { RectButton } from '../../GeneralComponent';

const Container = Styled.div`
    display: flex;
    justify-content: flex-end;
`;

interface IProps {
    onCancel: () => void;
    onSubmit: () => void;
}

class Footer extends React.Component<IProps, {}> {
    public render() {
        const { onCancel, onSubmit } = this.props;
        return (
            <Container>
                <RectButton onClick={onSubmit}>OK</RectButton>
                <RectButton onClick={onCancel}>Cancel</RectButton>
            </Container>
        );
    }
}

export default Footer;
