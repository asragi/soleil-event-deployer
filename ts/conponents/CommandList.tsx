import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';

// #region styled
const Container = Styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
`;

// #endregion
export class CommandList extends React.Component<{}, {}> {
    public render() {
        return (
            <Container>
                <CommandIcon />
                <CommandIcon />
                <CommandIcon />
            </Container>
        );
    }
}
