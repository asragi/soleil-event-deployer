import React from 'react';
import Styled from 'styled-components';
import { $OverlayWindow } from '../../utils/DepthNum';
import { IEventObject } from 'ts/states/IEvent';
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
    justify-content: center;
    align-items: center;
`;

interface IProps {
    target: IEventObject;
}

export class EventWindow extends React.Component<IProps, {}> {
    public render() {
        return (
            <WindowBack>
                {this.props.target.name}
            </WindowBack>
        );
    }
}
