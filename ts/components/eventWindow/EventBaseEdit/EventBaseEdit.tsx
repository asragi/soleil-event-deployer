import React from 'react';
import EventType from '../../../utils/EventType';
import MessageEdit from './MessageEdit';
import { GrayBackPrototype } from '../../GeneralComponent';
import { $NewEventWindowBack } from '../../../utils/DepthNum';

interface IProps {
    eventType: EventType,
    show: boolean,
    onCancel: () => void;
    onSubmit: () => void;
}

const GrayBack = GrayBackPrototype($NewEventWindowBack);

export class EventBaseEdit extends React.Component<IProps, {}> {
    public render() {
        if (!this.props.show) return null;
        return (
            <>
            <GrayBack />
            { this.switchWindow(this.props.eventType) }
            </>
        );
    }

    private switchWindow = (type: EventType): JSX.Element | null => {
        const { onCancel, onSubmit } = this.props;
        switch (type) {
            case 'message':
                return <MessageEdit onCancel={onCancel} onSubmit={onSubmit} />
            case 'changeInput':
                break;
        }
        return null;
    }
}
