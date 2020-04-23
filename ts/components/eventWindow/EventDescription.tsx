import React from 'react';
import Styled from 'styled-components';
import { IEventObject, IEventBase } from '../../states/IEvent';
import { EventConditionList } from './EventConditionList';
import { EventList } from './EventList';

//#region Style
const Container = Styled.div`
    display: flex;
    flex-grow: 1;
`;
//#endregion

interface IProps {
    target: IEventObject;
    onClickAdd: () => void;
    onStartEdit: (e: IEventBase) => void;
}

/**
 * イベントの設定ウィンドウの下部本体部分
 */
export class EventDescription extends React.Component<IProps, {}> {
    public render() {
        const { target, onClickAdd, onStartEdit } = this.props;
        // TODO: EventSequenceが複数ある場合の対応
        const es = !!target.eventSeqs ? target.eventSeqs[0] : undefined;
        return(
            <Container>
                <EventConditionList />
                <EventList
                    eventSet={es}
                    onClickAdd={onClickAdd}
                    onStartEdit={onStartEdit}/>
            </Container>
        );
    }
}
