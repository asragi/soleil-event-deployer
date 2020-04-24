import React from 'react';
import Clone from 'clone';
import { v4 as UUID } from 'uuid';
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
        console.log('INITIALIZE');
    }

    public render() {
        const { targetEvent, showCreateWindow } = this.state;
        return (
            <>
                <GrayBack onClick={this.onClickGray} />
                <EventWindow
                    target={targetEvent}
                    onClickAdd={this.onClickPlus}
                    onStartEdit={this.onStartEditEvent}
                    onDelete={this.onDeleteEvent}
                    onCopy={this.onCopyEvent} />
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

    private onDeleteEvent = (target: IEventBase) => {
        if (!confirm(`イベント${target.content}を削除しますか？`)) return;
        this.updateEvent(target, (e, arr) => arr.filter(a => a.id !== e.id));
    }

    private onCopyEvent = (event: IEventBase) => {
        this.updateEvent(event, (e, arr) => {
            const index = arr.findIndex(a => a.id === e.id);
            const insertEvent = Clone(e);
            insertEvent.id = UUID();
            arr.splice(index, 0, insertEvent);
            return arr;
        });
    }

    private onSubmitEdit = (event: IEventBase) => {
        this.updateEvent(event, (e, arr) => {
            const replaceIndex = arr.findIndex(a => a.id === e.id);
            arr.splice(replaceIndex, 1, e);
            return arr;
        });
        this.setState({ 
            showEventEditWindow: false,
        });
    }

    private addEvent = (event: IEventBase) => {
        this.updateEvent(event,
            (e, arr) => {
                arr.push(e);
                return arr;
            });
    }

    private updateEvent = 
        (event: IEventBase,
            procedure: (e: IEventBase, arr: IEventBase[]) => IEventBase[]) => {
            const { pageIndex } = this.state;
            const cloned = Clone(this.state.targetEvent);
            const targetArray = Clone(cloned.eventSeqs[pageIndex].event);
            cloned.eventSeqs[pageIndex].event = procedure(event, targetArray);
            this.setState({ targetEvent: cloned });
    }
}
