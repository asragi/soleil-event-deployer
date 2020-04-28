import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import { createLoadEventsAction } from '../actions/EventActionCreator';
import { openDataFolder, decideMapImg } from '../utils/OpenMapFolder';
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

interface IProps{
    onLoadImg?: (mapImg: string) => void;
}

// #endregion
export class CommandList extends React.Component<IProps, {}> {
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

    private Initialize = async () => {
        const created = await decideMapImg();
    }

    private LoadData = async () => {
        const { onLoadImg } = this.props;
        const folderData = await openDataFolder();
        if (!folderData) {
            alert('Cannot load file!');
            return;
        }
        store.dispatch(createLoadEventsAction(store.dispatch, folderData.map));
        !!onLoadImg && onLoadImg(folderData.mapImg);
    }

    private SaveAsSameFile = () => {

    }

    private SaveAsExec = () => {

    }
}
