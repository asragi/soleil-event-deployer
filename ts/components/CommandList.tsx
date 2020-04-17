import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import { createLoadEventsAction } from '../actions/EventActionCreator';
import newfile from './icons/newfile.png';
import openfile from './icons/openfile.png';
import savefile from './icons/savefile.png';
import savefileas from './icons/savefileas.png';

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
                <CommandIcon onClick={this.Initialize} src={newfile} />
                <CommandIcon onClick={this.LoadData} src={openfile}/>
                <CommandIcon onClick={this.SaveAsSameFile} src={savefile}/>
                <CommandIcon onClick={this.SaveAsExec} src={savefileas}/>
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
