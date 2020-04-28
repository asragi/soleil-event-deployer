import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import {
    createLoadEventsAction,
    createUpdateFolderPathAction } from '../actions/EventActionCreator';
import { openDataFolder, createMapFromImg } from '../utils/OpenMapFolder';
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
        const { onLoadImg } = this.props;
        if (!confirm('編集中のデータを破棄して新規作成します')) {
            return;
        }
        const mapData = await createMapFromImg();
        if (!mapData) return;
        this.onLoadComplete(mapData, this.props.onLoadImg);
    }

    private LoadData = async () => {
        const folderData = await openDataFolder();
        if (!folderData) {
            alert('Cannot load file!');
            return;
        }
        this.onLoadComplete(folderData, this.props.onLoadImg);
    }

    private SaveAsSameFile = () => {

    }

    private SaveAsExec = () => {

    }

    private onLoadComplete = (mapData: any, onLoadImg?: (s: string) => void) => {
        store.dispatch(createLoadEventsAction(store.dispatch, mapData.map));
        store.dispatch(createUpdateFolderPathAction(mapData.fullPath));
        !!onLoadImg && onLoadImg(mapData.mapImg);
    }
}
