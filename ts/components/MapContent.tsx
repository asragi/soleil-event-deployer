import React from 'react';
import Styled from 'styled-components'
import { CSSProperties } from 'react';
import { IMap, IEventObject } from '../states/IEvent';

// #region styled
const Container = Styled.div`
    position: relative;
    height: 0;
`;

interface IProps{
    map: IMap;
    base64src: string;
    onTouch: (e: React.MouseEvent) => void;
    callWindow: (target :IEventObject) => void;
}

export class MapContent extends React.Component<IProps, {}> {
    public render() {
        const { base64src, map, callWindow, onTouch } = this.props;
        return(
            <Container onContextMenu={onTouch}>
                { this.renderMap(base64src) }
                <MapEventField map={map} callWindow={callWindow}/>
            </Container>
        );
    }

    private renderMap(base64src: string): JSX.Element | null {
        const imgElm = <img src={`data:image/png;base64,${base64src}`} />
        return !!base64src ? imgElm : null;
    }
}

interface IMapButtonProps {
    map: IMap;
    callWindow: (target: IEventObject) => void;
}

class MapEventField extends React.Component<IMapButtonProps, {}> {
    public render() {
        const { map, callWindow } = this.props;
        const elms = map.eventObjs.map(
            obj => {
                const style: CSSProperties = {
                    position: 'absolute',
                    top: String(obj.pos.y) + 'px',
                    left: String(obj.pos.x) + 'px',
                };
                return (
                    <button
                        style={style}
                        onClick={() => { callWindow(obj); }}
                        key={obj.id}>
                        {obj.name}
                    </button>
                );
            }
        );
        return(elms);
    };
}
