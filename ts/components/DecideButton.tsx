import React from 'react';
import Styled from 'styled-components';
import { RectButton } from './GeneralComponent';

const $margin = 10;
const Container = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 ${$margin}px ${$margin}px;
`;

const OKButton = Styled(RectButton)`
    margin-right: ${$margin}px;
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
                <OKButton onClick={onSubmit}>OK</OKButton>
                <RectButton onClick={onCancel}>Cancel</RectButton>
            </Container>
        );
    }
}

export default Footer;
