import React from 'react';
import Clone from 'clone';
import Styled from 'styled-components';
import Footer from '../../DecideButton';
import { CenterWindow, Title, StyledHr } from '../../GeneralComponent';
import { $NewEventWindow } from '../../../utils/DepthNum';
import { IEventBase } from '../../../states/IEvent';

//#region style
const WindowBack = Styled(CenterWindow(60, $NewEventWindow))`
    display: flex;
    flex-direction: column;
`;
const Container = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const ContentInput = Styled.input`
    width: 140px;
`;
//#endregion

interface IProps {
    onCancel: () => void;
    onSubmit: (e: IEventBase) => void;
    target: IEventBase;
}

interface LocalState {
    content: string;
}

/** ゲームイベント: メッセージの表示 を設定するウィンドウ */
class MessageEdit extends React.Component<IProps, LocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            content: props.target.content,
        };
    }

    public render() {
        const { onCancel } = this.props;
        return(
            <WindowBack>
                <Container>
                    <Title>{'メッセージの表示'}</Title>
                    <StyledHr />
                    {'Content'}
                    <ContentInput
                        value={this.state.content}
                        onChange={this.onChangeContent}
                    />
                </Container>
                <Footer onCancel={onCancel} onSubmit={this.onSubmit}/>
            </WindowBack>
        );
    }

    private onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState( {content: e.target.value} );
    }

    private onSubmit = (): void => {
        // Create new Event and Return it
        const newEvent = Clone(this.props.target);
        newEvent.content = this.state.content;
        this.props.onSubmit(newEvent);
    }
}

export default MessageEdit;
