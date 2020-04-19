import React from 'react';
import Styled from 'styled-components';
import { IEvent } from '../../states/IEvent';

//#region Style
const Container = Styled.div`
    width: 200px;
    display: flex;
`;
//#endregion

/**
 * イベントの詳細設定ウィンドウの左側に表示される
 * 発動条件などを設定するエリアのコンポーネント
 */
export class EventConditionList extends React.Component {
    public render() {
        return(
            <Container>
                
            </Container>
        );
    }
}