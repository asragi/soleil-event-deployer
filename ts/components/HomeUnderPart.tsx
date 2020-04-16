import React from 'react';
import Styled from 'styled-components';
import { MapEventList } from './MapEventList';
import { MapDisplay } from './MapDisplay';
import { IMap } from '../states/IEvent';

// #region styled
const Container = Styled.div`
    display: flex;
    flex-grow: 1;
`;
// #endregion

export class HomeUnderPart extends React.Component<IMap, {}> {
    public render() {
        const { eventObjs } = this.props;
        return(
            <Container>
                <MapEventList eventObjs={eventObjs} />
                <MapDisplay />
            </Container>
        );
    }
}
