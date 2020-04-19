import React from 'react';
import Styled from 'styled-components';
import { IEventObject } from '../../states/IEvent';
import { Header } from './Header';
import { EventDescription } from './EventDescription';
import { $OverlayWindow } from '../../utils/DepthNum';
import { $DAWN_LIGHT_GOLD, $DAWN_BLACK } from '../FoundationStyles';

const $Margin = 30;
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
    z-index: ${$OverlayWindow};

    display: flex;
    flex-direction: column;
`;

interface IProps {
    target: IEventObject;
}

export class EventWindow extends React.Component<IProps, {}> {
    public render() {
        const { target } = this.props;
        return (
            <WindowBack>
                <Header target={target} />
                <EventDescription target={target} />
            </WindowBack>
        );
    }
}
