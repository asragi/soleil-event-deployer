import React from 'react';
import Styled from 'styled-components';
import { IEventObject } from 'ts/states/IEvent';

const GrayBack = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: gray;
    opacity: 50%;
    z-index: 1;
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
            <GrayBack onClick={this.onClickGray} />
        );
    }

    private onClickGray = (): void => {
        const { onClose } = this.props;
        !!onClose && onClose();
    }
}
