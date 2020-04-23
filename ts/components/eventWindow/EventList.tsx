import React from 'react';
import Styled from 'styled-components';
import { IEvent, IEventBase } from '../../states/IEvent';
import { BoxButton, Image, ClickableRect } from '../GeneralComponent';
import { $GOLD_BORDER } from '../../components/FoundationStyles';
// imgs
import plusImg from '../icons/newfile.png';
import trashImg from '../icons/trash.png';
import copyImg from '../icons/copy.png';

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

const OpeButton = Styled(BoxButton)`
    margin-left: 3px;
`;

const LiText = Styled.div`
    flex-grow: 1;
`;

const AddEventButton = Styled(BoxButton)`
    margin: 3px auto 0 auto;
`;
//#endregion

interface IProps {
    eventSet?: IEvent;
    onClickAdd: () => void;
    onStartEdit: (e: IEventBase) => void;
    onDelete: (e: IEventBase) => void;
    onCopy: (e: IEventBase) => void;
}

/** イベント詳細ウィンドウで表示されるイベントのリスト */
export class EventList extends React.Component<IProps, {}> {
    public render() {
        const { eventSet } = this.props;
        const events = !!eventSet ? eventSet.event : [];
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
        const { onStartEdit, onDelete, onCopy } = this.props;
        return eventList.map(
            elm => {
                return (
                    <LiElement key={elm.id} onClick={() => onStartEdit(elm)}>
                        <LiText>{`${elm.type}:${elm.content}:${elm.id}`}</LiText>
                        <OpeButton onClick={(e) => this.PreventExec(e, elm, onCopy)}>
                            <Image src={copyImg}/>
                        </OpeButton>
                        <OpeButton onClick={(e) => this.PreventExec(e, elm, onDelete)}>
                            <Image src={trashImg}/>
                        </OpeButton>
                    </LiElement>
                );
            }
        );
    }

    private PreventExec = (
        e: React.MouseEvent, event: IEventBase,
        action: (event: IEventBase) => void,) => {
            e.stopPropagation();
            action(event);
        }
}
