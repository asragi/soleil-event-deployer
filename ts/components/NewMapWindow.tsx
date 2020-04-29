import React from 'react';
import Styled from 'styled-components';
// interfaces, settings
import { $OverlayWindowBack, $OverlayWindow } from '../utils/DepthNum';
// styles
import {
    GrayBackPrototype,
    CenterWindow,
    RectButton } from './GeneralComponent';
// components
import Footer from './DecideButton';
import { openFileDialog, readFile } from '../utils/FileDialog';

const GrayBack = GrayBackPrototype($OverlayWindowBack);
const Window = Styled(CenterWindow(100, $OverlayWindow))`
    display: flex;
    flex-direction: column;
`;
const NameLabel = Styled.div``;

interface IProps {
    onCancel: () => void;
    onSubmit: (imgPath: string, folderPath: string) => void;
}

interface ILocalState {
    imgPath: string;
    folderPath: string;
}

/** マップのデータを新規作成するウィンドウ */
export class NewMapWindow extends React.Component<IProps, ILocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            imgPath: '',
            folderPath: '',
        };
    }

    public render() {
        const mapInfo = 'マップの背景画像';
        const folderInfo = 'マップデータの保存先フォルダ'
        const { onCancel } = this.props;
        return (
            <>
                <GrayBack />
                <Window>
                    <NameLabel>{mapInfo}</NameLabel>
                    <RectButton onClick={this.setImg}>{this.state.imgPath}</RectButton>
                    <NameLabel>{folderInfo}</NameLabel>
                    <RectButton onClick={this.setFolder}>{this.state.folderPath}</RectButton>
                    <Footer onCancel={onCancel} onSubmit={this.onSubmit}/>
                </Window>
            </>
        );
    }

    private onSubmit = async () => {
        const { imgPath, folderPath } = this.state;
        if(!imgPath || !folderPath) return;
        this.props.onSubmit(imgPath, folderPath);
    }

    private setImg = async () => {
        const imgPathRead = await openFileDialog({
            filters: [{name: 'Images', extensions: ['png']}]
        }, ['openFile']);
        if (!imgPathRead) return;
        const imgPath = imgPathRead.filePaths[0];
        this.setState({ imgPath });
    }

    private setFolder = async () => {
        const directoryPathRead = await openFileDialog([], ['openDirectory']);
        if (!directoryPathRead) return;
        const folderPath = directoryPathRead.filePaths[0];
        this.setState({ folderPath });
    }
}
