import React from 'react';
import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';

// #region styled
const Container = Styled.div`
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    color: ${$DAWN_LIGHT_GOLD};
    padding: 8px;
    display: flex;
`;
// #endregion

interface IProps {
    id: string;
    title: string;
}

export class EventDesc extends React.Component<IProps, {}> {
    public render() {
        const { id, title } = this.props;
        return(
            <Container>
                <div>{ title }</div>
            </Container>
        );
    }
}
