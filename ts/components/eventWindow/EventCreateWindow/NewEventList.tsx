import React from 'react';
import Styled from 'styled-components';
import EventType, { EventTypeList } from '../../../utils/EventType'
import { $DAWN_LIGHT_GOLD, $DAWN_BLACK } from '../../FoundationStyles';

//#region style
const Container = Styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const EventLi = Styled.div`
    width: 50%;
`;
//#endregion

interface IProps {
    onDecided: (eventType: EventType) => void;
}

/** 新規作成するイベントのリストを表示するコンポーネント */
export class NewEventList extends React.Component<IProps, {}> {
    public render() {
        return (
            <Container>
                {this.CreateList()}
            </Container>
        )
    }

    private CreateList = () => {
        return EventTypeList.map(
            t => <EventLi onClick={() => this.props.onDecided(t)}>{t}</EventLi>
        );
    }
}
