import React from 'react';
import Styled from 'styled-components';
import Clone from 'clone';
import { IEvent, IEventBase } from '../../states/IEvent';
import { BoxButton, Image, ClickableRect } from '../GeneralComponent';
import { $GOLD_BORDER } from '../../components/FoundationStyles';
import plusImg from '../icons/newfile.png';

//#region Style
const Container = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 10px 0;
    flex-grow: 1;
    ${$GOLD_BORDER}
    border-radius: 5px;
`;

const LiElement = Styled(ClickableRect)`
    height: 30px;
    margin: 3px 3px 0;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const AddEventButton = Styled(BoxButton)`
    margin: 3px auto 0 auto;
`;
//#endregion

interface IProps {
    eventSet?: IEvent;
    onClickAdd: () => void;
}

interface LocalState {
    events: IEventBase[];
}

/** イベント詳細ウィンドウで表示されるイベントのリスト */
export class EventList extends React.Component<IProps, LocalState> {
    public constructor(props: IProps) {
        super(props);
        const events = props.eventSet;
        this.state = {
            events: !!events ? events.event : [],
        }
    }

    public render() {
        const { events } = this.state;
        return(
            <Container>
                {this.CreateEventListItems(events)}
                <AddEventButton onClick={this.props.onClickAdd}>
                    <Image src={plusImg} />
                </AddEventButton>
            </Container>
        );
    }

    private CreateEventListItems = (eventList: IEventBase[]) => {
        if(eventList.length === 0) return null;
        return eventList.map(
            elm => {
                return (
                    <LiElement>
                        {`${elm.type}:${elm.content}`}
                    </LiElement>
                );
            }
        );
    }
}
