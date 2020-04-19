import React from 'react';
import Styled from 'styled-components';
import { IEvent } from '../../states/IEvent';
import { 
    $GOLD_BORDER, $DAWN_LIGHT_GOLD, $DAWN_BLACK
} from '../../components/FoundationStyles';

interface IProps {
    eventSet?: IEvent;
}

//#region Style
const Container = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    flex-grow: 1;
    ${$GOLD_BORDER}
    border-radius: 5px;
`;
const LiElement = Styled.div`
    height: 30px;
    ${$GOLD_BORDER}
    border-radius: 5px;
    margin: 3px 3px 0;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.3s;

    &:hover {
        background: ${$DAWN_LIGHT_GOLD};
        color: ${$DAWN_BLACK};
        cursor: pointer;
    }
`;
//#endregion

/** イベント詳細ウィンドウで表示されるイベントのリスト */
export class EventList extends React.Component<IProps, {}> {
    public render() {
        const { eventSet } = this.props;
        return(
            <Container>
                {this.CreateEventListItems(eventSet)}
            </Container>
        );
    }

    private CreateEventListItems = (eventList: IEvent | undefined) => {
        if(!eventList) return null;
        const events = eventList.event;
        return events.map(
            elm => {
                return (
                    <LiElement>{elm.type}</LiElement>
                );
            }
        );
    }
}
