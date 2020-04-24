import React from 'react';
import Styled from 'styled-components';
import ScrollBooster from 'scrollbooster';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';
import { MapContent } from './MapContent'
import { IMap, IEventObject } from 'ts/states/IEvent';

// #region styled

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ViewPort = Styled.div`
    display: flex;
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    flex: 1;
    overflow: scroll;
    cursor: move;
`;
// #endregion

interface IProps {
    map: IMap;
    mapImg: string;
    callWindow: (target: IEventObject) => void;
}

interface IState {
    mapImg: string;
}

export class MapDisplay extends React.Component<IProps, IState> {
    public componentDidMount() {
        const elm = document.getElementById('viewport');

        new ScrollBooster({
            viewport: elm,
            scrollMode: 'transform',
            emulateScroll: true,
         });
    }

    public render() {
        const { map, mapImg } = this.props;
        const renderDoms = (
            <ViewPort id={'viewport'}>
                <MapContent
                    base64src={mapImg} map={map} onTouch={this.onTouch}
                    callWindow={this.props.callWindow} />
            </ViewPort>
        );
        return(renderDoms);
    }

    private onTouch = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
    }
}
