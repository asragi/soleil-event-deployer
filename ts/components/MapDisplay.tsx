import React from 'react';
import Styled from 'styled-components';
import ScrollBooster from 'scrollbooster';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';
import { MapContent } from './MapContent'
import { IMap } from 'ts/states/IEvent';

// #region styled
const Container = Styled.div`
    display: flex;
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    flex-grow: 1;
    overflow: auto;
`;
// #endregion

interface IProps {
    map: IMap;
    mapImg: string;
}

interface IState {
    mapImg: string;
}

export class MapDisplay extends React.Component<IProps, IState> {
    public componentDidMount() {
        const elm = document.getElementById("viewport");
        new ScrollBooster({ 
            viewport: elm,
            scrollMode: 'transform',
         });
    }

    public render() {
        const { map, mapImg } = this.props;
        const renderDoms = (
            <Container id={"viewport"}>
                <MapContent base64src={mapImg} map={map} />
            </Container>
        );
        return(renderDoms);
    }
}
