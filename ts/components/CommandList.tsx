import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import {
    createLoadEventsAction,
    createUpdateFolderPathAction } from '../actions/EventActionCreator';
import {
    openDataFolder, saveData } from '../utils/OpenMapFolder';
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
    onPushInit: () => void;
}

// #endregion

/** アプリ上部の「新規作成」「開く」などを表示するコンポーネント */
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
        if (!confirm('編集中のデータを破棄して新規作成します')) {
            return;
        }
        this.props.onPushInit();
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
        const mapData = store.getState().map;
        const saveSuccess = saveData(mapData.folderPath, mapData.eventObjs);
        if(!saveSuccess) return;
        alert('Save Complete!');
    }

    private SaveAsExec = () => {
        alert('Not Implemented!');
    }

    private onLoadComplete = (mapData: any, onLoadImg?: (s: string) => void) => {
        store.dispatch(createLoadEventsAction(store.dispatch, mapData.map));
        store.dispatch(createUpdateFolderPathAction(mapData.fullPath));
        !!onLoadImg && onLoadImg(mapData.mapImg);
    }
}
