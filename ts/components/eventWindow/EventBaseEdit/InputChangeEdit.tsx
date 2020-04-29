import React from 'react';
import Clone from 'clone';
import Styled from 'styled-components';
import Footer from '../../DecideButton';
import { CenterWindow, Title, StyledHr } from '../../GeneralComponent';
import { $NewEventWindow } from '../../../utils/DepthNum';
import { IEventBase } from '../../../states/IEvent';
import { FocusList } from '../../../utils/InputType';

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
//#endregion

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
        const { onCancel } = this.props;
        return(
            <WindowBack>
                <Container>
                    <Title>{'入力先フラグの変更'}</Title>
                    <StyledHr />
                    {'Content'}
                    {this.renderPullDownMenu(this.onChangeContent)}
                </Container>
                <Footer onCancel={onCancel} onSubmit={this.onSubmit}/>
            </WindowBack>
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
