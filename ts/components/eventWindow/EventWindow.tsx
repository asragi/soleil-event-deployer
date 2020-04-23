import React from 'react';
import Styled from 'styled-components';
import { IEventObject, IEventBase } from '../../states/IEvent';
import { Header } from './Header';
import { EventDescription } from './EventDescription';
import { $OverlayWindow } from '../../utils/DepthNum';
import { CenterWindow } from '../GeneralComponent';

const WindowBack = Styled(CenterWindow(30, $OverlayWindow))`
    display: flex;
    flex-direction: column;
`;

interface IProps {
    target: IEventObject;
    onClickAdd: () => void;
    onStartEdit: (e: IEventBase) => void;
}

export class EventWindow extends React.Component<IProps, {}> {
    public render() {
        const { target, onClickAdd, onStartEdit } = this.props;
        return (
            <WindowBack>
                <Header target={target} />
                <EventDescription
                    target={target}
                    onClickAdd={onClickAdd}
                    onStartEdit={onStartEdit}/>
            </WindowBack>
        );
    }
}
