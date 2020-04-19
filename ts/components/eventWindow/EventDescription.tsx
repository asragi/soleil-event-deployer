import React from 'react';
import Styled from 'styled-components';
import { IEventObject } from '../../states/IEvent';
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
}

/**
 * イベントの設定ウィンドウの本体部分
 */
export class EventDescription extends React.Component<IProps, {}> {
    public render() {
        const { target } = this.props;
        // TODO: EventSequenceが複数ある場合の対応
        const es = !!target.eventSeqs ? target.eventSeqs[0] : undefined;
        return(
            <Container>
                <EventConditionList />
                <EventList eventSet={es}/>
            </Container>
        );
    }
}
