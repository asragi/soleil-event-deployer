import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import { createLoadEventsAction } from '../actions/EventActionCreator';
import hoge from './icons/newfile.png';

// #region styled
const Container = Styled.div`
    display: flex;
    width: 100%;
    height: 36px;
    align-items: center;
`;

// #endregion
export class CommandList extends React.Component<{}, {}> {
    public render() {
        return (
            <Container>
                <CommandIcon onClick={this.Initialize}/>
                <CommandIcon onClick={this.LoadData}/>
                <CommandIcon onClick={this.SaveAsSameFile}/>
                <CommandIcon onClick={this.SaveAsExec}/>
            </Container>
        );
    }

    private Initialize = () => {

    }

    private LoadData = async () => {
        store.dispatch(createLoadEventsAction(store.dispatch));
    }

    private SaveAsSameFile = () => {

    }

    private SaveAsExec = () => {

    }
}
