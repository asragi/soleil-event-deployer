import React from 'react';
import Styled from 'styled-components';
import { IEvent } from '../../states/IEvent';
import { BoxButton, Image } from '../GeneralComponent';
import { 
    $GOLD_BORDER, $DAWN_LIGHT_GOLD, $DAWN_BLACK
} from '../../components/FoundationStyles';
import plusImg from '../icons/newfile.png';

interface IProps {
    eventSet?: IEvent;
    onClickAdd: () => void;
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
const AddEventButton = Styled(BoxButton)`
    margin: 3px auto 0 auto;
`;
//#endregion

/** イベント詳細ウィンドウで表示されるイベントのリスト */
export class EventList extends React.Component<IProps, {}> {
    public render() {
        const { eventSet } = this.props;
        return(
            <Container>
                {this.CreateEventListItems(eventSet)}
                <AddEventButton onClick={this.props.onClickAdd}>
                    <Image src={plusImg} />
                </AddEventButton>
            </Container>
        );
    }

    private CreateEventListItems = (eventList: IEvent | undefined) => {
        if(!eventList) return null;
        const events = eventList.event;
        return events.map(
            elm => {
                return (
                    <LiElement>
                        {elm.type}
                    </LiElement>
                );
            }
        );
    }
}
