import React from 'react';
import Styled from 'styled-components';
import { $EventCreateWindowBack, $EventCreateWindow } from '../../../utils/DepthNum';
import { GrayBackPrototype, CenterWindow } from '../../GeneralComponent';
import { NewEventList } from './NewEventList';
import EventType from '../../../utils/EventType';

//#region style
const WindowBack = Styled(CenterWindow(50, $EventCreateWindow))`
    display: flex;
    flex-direction: column;
`;

const GrayBack = GrayBackPrototype($EventCreateWindowBack);
//#endregion

interface IProps {
    shown: boolean;
    onDecide: (type: EventType) => void;
}

/** マップイベントを新たに生み出して設定するためのウィンドウ */
export class EventCreateWindow extends React.Component<IProps, {}> {
    public render() {
        if (!this.props.shown) return null;
        return (
            <>
                <GrayBack />
                <WindowBack>
                    <NewEventList onDecided={this.props.onDecide}/>
                </WindowBack>
            </>
        )
    }
}
