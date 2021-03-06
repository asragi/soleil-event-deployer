import React from 'react';
import Styled from 'styled-components';
import ScrollBooster from 'scrollbooster';
import { $DAWN_LIGHT_GOLD } from './FoundationStyles';
import { MapContent } from './MapContent';
import { IMap, IEventObject, IPos } from 'ts/states/IEvent';

// context menu
import ContextMenu from './ContextMenu';
import { $MapContextMenu, $MapContextMenuBack } from '../utils/DepthNum';

// #region styled
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
    onCreateObj: (pos: IPos) => void;
}

interface IState {
    showContext: boolean;
    contextX: number;
    contextY: number;
    objPos: IPos;
}

export class MapDisplay extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            showContext: false,
            contextX: 0,
            contextY: 0,
            objPos: { x:0, y:0 },
        };
    }

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
        return (
            <ViewPort id={'viewport'}>
                <MapContent
                    base64src={mapImg} map={map} onTouch={this.onTouch}
                    callWindow={this.props.callWindow} />
                {this.renderContext(this.state.showContext)}
            </ViewPort>
        );
    }

    private renderContext = (show: boolean) => {
        if (!show) return null;
        const { contextX, contextY } = this.state;
        const options = this.makeOptions();
        return <ContextMenu 
            depth={$MapContextMenu} depthBack={$MapContextMenuBack}
            x={contextX} y={contextY} options={options}
            onClose={() => this.setState({ showContext: false })}
            />
    }

    private onTouch = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.x;
        const y = e.clientY - rect.y;
        this.setState({
            showContext: true,
            contextX: e.clientX,
            contextY: e.clientY,
            objPos: {x, y},
        });
    }

    private makeOptions = () => {
        return [
            { label: 'イベント:新規作成', action: this.oCreateEvent},
        ];
    }

    private oCreateEvent = () => {
        this.setState({showContext: false});
        this.props.onCreateObj(this.state.objPos);
    }
}
