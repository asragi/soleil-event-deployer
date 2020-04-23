import React from 'react';
import EventType from '../../../utils/EventType';
import MessageEdit from './MessageEdit';
import { GrayBackPrototype } from '../../GeneralComponent';
import { $NewEventWindowBack } from '../../../utils/DepthNum';
import { IEventBase } from '../../../states/IEvent';

interface IProps {
    editingEvent?: IEventBase;
    show: boolean;
    onCancel: () => void;
    onSubmit: (e: IEventBase) => void;
}

const GrayBack = GrayBackPrototype($NewEventWindowBack);

export class EventBaseEdit extends React.Component<IProps, {}> {
    public render() {
        const { editingEvent } = this.props;
        if (!this.props.show) return null;
        if (!editingEvent) return null;
        return (
            <>
            <GrayBack />
            { this.switchWindow(editingEvent) }
            </>
        );
    }

    private switchWindow = (event: IEventBase): JSX.Element | null => {
        const { onCancel, onSubmit,  } = this.props;
        const type = event.type as EventType;
        switch (type) {
            case 'message':
                return <MessageEdit target={event} onCancel={onCancel} onSubmit={onSubmit} />
            case 'changeInput':
                break;
        }
        return null;
    }
}
