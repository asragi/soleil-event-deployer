import React from 'react';
import Styled from 'styled-components';

// #region styled
const Container = Styled.div`
    display: flex;
    background-color: #00FF00;
    flex-grow: 1;
`;
// #endregion

export class MapDisplay extends React.Component<{}, {}> {
    public render() {
        return(
            <Container>
                
            </Container>
        );
    }
}
