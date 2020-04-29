import React from 'react';
import Clone from 'clone';
import { IEventBase } from '../../../states/IEvent';
import { FocusList } from '../../../utils/InputType';
import EditWindowParent from './EditWindow';

interface IProps {
    onCancel: () => void;
    onSubmit: (e: IEventBase) => void;
    target: IEventBase;
}

interface LocalState {
    content: string;
}

/** ゲームイベント: 入力対象のフラグの変更 を設定するウィンドウ */
class InputChangeEdit extends React.Component<IProps, LocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            content: props.target.content,
        };
    }

    public render() {
        const title = '入力先フラグの変更';
        const { onCancel } = this.props;
        return(
            <EditWindowParent
                onCancel={onCancel}
                onSubmit={this.onSubmit}
                title={title}>
                    {'Content: InputFocusTarget'}
                    {this.renderPullDownMenu(this.onChangeContent)}
            </EditWindowParent>
        );
    }

    private renderPullDownMenu =
        (onChangeEvent: (e: React.ChangeEvent<HTMLSelectElement>) => void) => {
            const options = FocusList.map(
                s => <option key={s} value={s}>{s}</option>
            );
            return(
                <select onChange={onChangeEvent}>
                    {options}
                </select>
            );
    }

    private onChangeContent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState( {content: e.target.value} );
    }

    private onSubmit = (): void => {
        // Create new Event and Return it
        const newEvent = Clone(this.props.target);
        newEvent.content = this.state.content;
        this.props.onSubmit(newEvent);
    }
}

export default InputChangeEdit;
