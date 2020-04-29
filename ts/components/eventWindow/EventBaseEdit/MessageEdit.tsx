import React from 'react';
import Clone from 'clone';
import Styled from 'styled-components';
import { IEventBase } from '../../../states/IEvent';
import EditWindowParent from './EditWindow';

//#region style
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
        const title = 'メッセージ表示イベント';
        const { onCancel } = this.props;
        return(
            <EditWindowParent
                onCancel={onCancel}
                onSubmit={this.onSubmit}
                title={title}>
                    {'Content'}
                    <ContentInput
                        value={this.state.content}
                        onChange={this.onChangeContent}
                    />
            </EditWindowParent>
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
