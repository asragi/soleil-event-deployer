import React from 'react';
import Styled from 'styled-components';
import { IEventObject, IEventBase } from '../../states/IEvent';
import { Header } from './Header';
import { EventDescription } from './EventDescription';
import { $OverlayWindow } from '../../utils/DepthNum';
import { CenterWindow } from '../GeneralComponent';
import Footer from '../DecideButton';

const WindowBack = Styled(CenterWindow(30, $OverlayWindow))`
    display: flex;
    flex-direction: column;
`;

// TODO: コールバック地獄をなんとかできないか
interface IProps {
    target: IEventObject;
    onClickAdd: () => void;
    onChangeName: (n: string) => void;
    onStartEdit: (e: IEventBase) => void;
    onDelete: (e: IEventBase) => void;
    onCopy: (e: IEventBase) => void;
    onSubmit: () => void;
    onCancel: () => void;
    onDeleteObj: () => void;
}

/** マップオブジェクトを編集するウィンドウの本体 */
export class EventWindow extends React.Component<IProps, {}> {
    public render() {
        const {
            target, onChangeName, onClickAdd, onStartEdit, onDelete, onCopy,
            onCancel, onSubmit, onDeleteObj } = this.props;
        return (
            <WindowBack>
                <Header
                    target={target}
                    onDelete={onDeleteObj}
                    onChangeName={onChangeName}/>
                <EventDescription
                    target={target}
                    onClickAdd={onClickAdd}
                    onStartEdit={onStartEdit}
                    onDelete={onDelete}
                    onCopy={onCopy} />
                <Footer onCancel={onCancel} onSubmit={onSubmit} />
            </WindowBack>
        );
    }
}
