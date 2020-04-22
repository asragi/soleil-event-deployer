import React from 'react';
import { IEventObject } from 'ts/states/IEvent';
import { EventWindow } from './eventWindow/EventWindow';
import { EventCreateWindow }  from './eventWindow/EventCreateWindow/EventCreateWindow';
import { $OverlayWindowBack } from '../utils/DepthNum';
import EventType from '../utils/EventType';
import { GrayBackPrototype } from './GeneralComponent';

const GrayBack = GrayBackPrototype($OverlayWindowBack);

interface IProps {
    shown: boolean;
    nowTarget?: IEventObject;
    onClose?: () => void;
}

interface ILocalState {
    showCreateWindow: boolean;
}

export class OverlayWindow extends React.Component<IProps, ILocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            showCreateWindow: false,
        };
    }

    public render() {
        const { shown, nowTarget } = this.props;
        if (!shown || !nowTarget) {
            return null;
        }
        return (    
            <>
                <GrayBack onClick={this.onClickGray} />
                <EventWindow target={nowTarget} onClickAdd={this.onClickAdd} />
                <EventCreateWindow
                    shown={this.state.showCreateWindow}
                    onDecide={this.onDecideEvent}
                />
            </>
        );
    }

    private onClickGray = (): void => {
        const { onClose } = this.props;
        !!onClose && onClose();
    }

    private onDecideEvent = (type: EventType) => {
        this.setState({ showCreateWindow: false });
        console.log(type);
    }

    private onClickAdd = () => {
        this.setState({ showCreateWindow: true });
    }
}
