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

interface IProps {
    map: IMap;
    mapImg: string;
}

export class HomeUnderPart extends React.Component<IProps, {}> {
    public render() {
        const { map, mapImg } = this.props;
        return(
            <Container>
                <MapEventList eventObjs={map.eventObjs} />
                <MapDisplay map={map} mapImg={mapImg}/>
            </Container>
        );
    }
}
