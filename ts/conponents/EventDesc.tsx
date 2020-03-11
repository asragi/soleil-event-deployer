import React from 'react';
import Styled from 'styled-components';

// #region styled
const Container = Styled.div`
    border-radius: 5px;
    padding: 10px;
    background-color: #FFFF00;
    display: flex;
`;
// #endregion

export class EventDesc extends React.Component {
    public render() {
        return(
            <Container>
                <div>EventName</div>
            </Container>
        );
    }
}
