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
}

export class MapDisplay extends React.Component<IProps, {}> {
    public componentDidMount() {
        const elm = document.getElementById("viewport");
        new ScrollBooster({ 
            viewport: elm,
            scrollMode: 'transform',
         });
    }

    public render() {
        const { map } = this.props;
        const renderDoms = (
            <Container id={"viewport"}>
                <MapContent base64src={''} map={map} />
            </Container>
        );
        return(renderDoms);
    }
}
