import React from 'react';
import Clone from 'clone';
// interfaces, settings
import { IEventObject, IEventBase, InitialEvent } from '../states/IEvent';
import EventType from '../utils/EventType';
import { $OverlayWindowBack } from '../utils/DepthNum';
// styles
import { GrayBackPrototype } from './GeneralComponent';
// components
import { EventWindow } from './eventWindow/EventWindow';
import { EventCreateWindow }  from './eventWindow/EventCreateWindow/EventCreateWindow';
import { EventBaseEdit } from './eventWindow/EventBaseEdit/EventBaseEdit';

const GrayBack = GrayBackPrototype($OverlayWindowBack);

interface IProps {
    shown: boolean;
    nowTarget: IEventObject;
    onClose?: () => void;
}

interface ILocalState {
    showCreateWindow: boolean;
    showEventEditWindow: boolean;
    targetEvent: IEventObject;
    pageIndex: number;
    nowSelectType: EventType;
}

export class EventEditWindow extends React.Component<IProps, ILocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            showCreateWindow: false,
            showEventEditWindow: false,
            targetEvent: Clone(props.nowTarget),
            pageIndex: 0,
            nowSelectType: 'none',
        };
    }

    public render() {
        const { shown } = this.props;
        const { targetEvent, showCreateWindow } = this.state;
        if (!shown) {
            return null;
        }
        return (    
            <>
                <GrayBack onClick={this.onClickGray} />
                <EventWindow target={targetEvent} onClickAdd={this.onClickPlus} />
                <EventCreateWindow
                    shown={showCreateWindow}
                    onDecide={this.onDecideEvent}
                />
                <EventBaseEdit
                    eventType={this.state.nowSelectType}
                    show={this.state.showEventEditWindow}/>
            </>
        );
    }

    private onClickGray = (): void => {
        const { onClose } = this.props;
        !!onClose && onClose();
    }

    private onDecideEvent = (type: EventType) => {
        this.setState({
            showCreateWindow: false,
            showEventEditWindow: true,
            nowSelectType: type,
        });
        this.addEvent(InitialEvent(type));
    }

    private onClickPlus = () => {
        this.setState({ showCreateWindow: true });
    }

    private addEvent = (event: IEventBase) => {
        const cloned = Clone(this.state.targetEvent);
        const newEvent = cloned.eventSeqs[this.state.pageIndex];
        newEvent.event.push(event);
        this.setState({ targetEvent: cloned });
    }
}
