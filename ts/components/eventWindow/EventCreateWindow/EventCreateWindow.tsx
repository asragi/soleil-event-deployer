import React from 'react';
import Styled from 'styled-components';
import { $DAWN_LIGHT_GOLD, $DAWN_BLACK } from '../../FoundationStyles';
import { $EventCreateWindowBack, $EventCreateWindow } from '../../../utils/DepthNum';
import { GrayBackPrototype } from '../../GeneralComponent';
import { NewEventList } from './NewEventList';
import EventType from '../../../utils/EventType';

//#region style
const $Margin = 50;
const WindowBack = Styled.div`
    border-radius: 5px;
    border: solid ${$DAWN_LIGHT_GOLD} 1px;
    background-color: ${$DAWN_BLACK};
    color: ${$DAWN_LIGHT_GOLD};
    position: fixed;
    top: ${$Margin}px;
    right: ${$Margin}px;
    left: ${$Margin}px;
    bottom: ${$Margin}px;
    z-index: ${$EventCreateWindow};

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
