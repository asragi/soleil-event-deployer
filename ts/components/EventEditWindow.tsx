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
    editingEvent?: IEventBase;
}

/** マップオブジェクトのイベントを設定するウィンドウのメインコンポーネント */
export class EventEditWindow extends React.Component<IProps, ILocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            showCreateWindow: false,
            showEventEditWindow: false,
            targetEvent: Clone(props.nowTarget),
            pageIndex: 0,
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
                <EventWindow
                    target={targetEvent}
                    onClickAdd={this.onClickPlus}
                    onStartEdit={this.onStartEditEvent} />
                <EventCreateWindow
                    shown={showCreateWindow}
                    onDecide={this.onDecideEvent}
                />
                <EventBaseEdit
                    editingEvent={this.state.editingEvent}
                    show={this.state.showEventEditWindow}
                    onCancel={this.onCancelEdit}
                    onSubmit={this.onSubmitEdit}/>
            </>
        );
    }

    private onClickGray = (): void => {
        const { onClose } = this.props;
        !!onClose && onClose();
    }

    private onDecideEvent = (type: EventType) => {
        const newEvent = InitialEvent(type);
        this.addEvent(newEvent);
        this.onStartEditEvent(newEvent);
    }

    private onStartEditEvent = (event: IEventBase) => {
        this.setState({
            showCreateWindow: false,
            showEventEditWindow: true,
            editingEvent: event,
        });
    }

    private onClickPlus = () => {
        this.setState({ showCreateWindow: true });
    }

    private onCancelEdit = () => {
        this.setState({ showEventEditWindow: false });
    }

    private onSubmitEdit = (newEvent: IEventBase) => {
        const cloned = Clone(this.state.targetEvent);
        const clonedEventSeq = cloned.eventSeqs[this.state.pageIndex];
        const eventArray = clonedEventSeq.event;
        // replace event
        const replaceIndex = eventArray.findIndex(e => e.id === newEvent.id);
        eventArray.splice(replaceIndex, 1, newEvent);
        this.setState({ 
            targetEvent: cloned,
            showEventEditWindow: false,
        });
    }

    private addEvent = (event: IEventBase) => {
        const cloned = Clone(this.state.targetEvent);
        const newEvent = cloned.eventSeqs[this.state.pageIndex];
        newEvent.event.push(event);
        this.setState({ targetEvent: cloned });
    }
}
