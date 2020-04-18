import React from 'react';
import Styled from 'styled-components';
import { IEventObject } from 'ts/states/IEvent';
import { EventWindow } from './eventWindow/EventWindow';
import { $OverlayWindowBack } from '../utils/DepthNum';

const GrayBack = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: gray;
    opacity: 50%;
    z-index: ${$OverlayWindowBack};
`;

interface IProps {
    shown: boolean;
    nowTarget?: IEventObject;
    onClose?: () => void;
}

export class OverlayWindow extends React.Component<IProps, {}> {
    public render() {
        const { shown, nowTarget } = this.props;
        if (!shown || !nowTarget) {
            return null;
        }
        return (    
            <>
                <GrayBack onClick={this.onClickGray} />
                <EventWindow target={nowTarget} />
            </>
        );
    }

    private onClickGray = (): void => {
        const { onClose } = this.props;
        !!onClose && onClose();
    }
}
