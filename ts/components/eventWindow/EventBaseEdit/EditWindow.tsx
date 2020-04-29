import React from 'react';
import Styled from 'styled-components';
import Footer from '../../DecideButton';
import { CenterWindow, Title, StyledHr } from '../../GeneralComponent';
import { $NewEventWindow } from '../../../utils/DepthNum';

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
    onSubmit: () => void;
    title: string;
}

/** 
 * ゲームイベントの編集ウィンドウの大枠コンポーネント
 * 対象のイベントの内容に応じた子要素を渡すことで
 * それぞれの編集ウィンドウを生み出す
 */
class EditWindowParent extends React.Component<IProps, {}> {
    public render() {
        const { onSubmit, onCancel, title, children } = this.props;
        return(
            <WindowBack>
                <Container>
                    <Title>{title}</Title>
                    <StyledHr />
                    {children}
                </Container>
                <Footer onCancel={onCancel} onSubmit={onSubmit}/>
            </WindowBack>
        );
    }
}

export default EditWindowParent;
