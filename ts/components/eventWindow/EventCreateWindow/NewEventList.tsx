import React from 'react';
import Styled from 'styled-components';
import EventType, { EventTypeList } from '../../../utils/EventType'
import { ClickableRect } from '../../GeneralComponent';
//#region style
const Container = Styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const EventLi = Styled.div`
    width: 50%;
`;
const EventLiInner = Styled(ClickableRect)`
    margin: 5px;
    padding: 5px;
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
        return EventTypeList.filter(e => e !== 'none').map(
            t =>
                <EventLi>
                    <EventLiInner onClick={() => this.props.onDecided(t)}>
                        {t}
                    </EventLiInner>
                </EventLi>
        );
    }
}
