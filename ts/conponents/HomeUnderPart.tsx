import React from 'react';
import Styled from 'styled-components';
import { MapEventList } from './MapEventList';
import { MapDisplay } from './MapDisplay';

// #region styled
const Container = Styled.div`
    display: flex;
    flex-grow: 1;
`;
// #endregion

export class HomeUnderPart extends React.Component<{}, {}> {
    public render() {
        return(
            <Container>
                <MapEventList />
                <MapDisplay />
            </Container>
        );
    }
}
