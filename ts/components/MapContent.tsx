import React from 'react';
import Styled from 'styled-components'
import { CSSProperties } from 'react';
import { IMap } from '../states/IEvent';

// #region styled
const Container = Styled.div`
    position: relative;
    height: 0;
`;

interface IProps{
    map: IMap;
    base64src: string;
}

export class MapContent extends React.Component<IProps, {}> {
    public render() {
        const { base64src, map } = this.props;
        return(
            <Container>
                { this.renderMap(base64src) }
                <MapEventField eventObjs={map.eventObjs} />
            </Container>
        );
    }

    private renderMap(base64src: string): JSX.Element | null {
        const imgElm = <img src={`data:image/png;base64,${base64src}`} />
        return !!base64src ? imgElm : null;
    }
}

class MapEventField extends React.Component<IMap, {}> {
    public render() {
        const elms = this.props.eventObjs.map(
            obj => {
                const style: CSSProperties = {
                    position: 'absolute',
                    top: String(obj.pos.y) + 'px',
                    left: String(obj.pos.x) + 'px',
                };
                return (
                    <button style={style}>
                        {obj.name}
                    </button>
                );
            }
        );
        return(elms);
    };
}