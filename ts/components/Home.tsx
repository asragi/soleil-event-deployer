import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { IState } from '../IStore';
// component
import { Loading } from './Loading';
import { CommandList } from './CommandList';
import { HomeUnderPart } from './HomeUnderPart';
import { EventEditWindow } from './EventEditWindow';
import { NewMapWindow } from './NewMapWindow';
import { IMap, IEventObject, IPos, createEventObject } from '../states/IEvent';
// dispatch
import store from '../Store';
import {
    createUpdateEventAction,
    createAddEventObjAction,
    createDeleteEventObjAction,
    createNewMapSetAction,
} from '../actions/EventActionCreator';

//#region styled
const HomeContainer = Styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const ShowContent = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 10px;
`;
//#endregion

interface HomeState {
    mapImg: string;
    nowTargetEvent?: IEventObject;
    showEditWindow: boolean;
    showNewMapWindow: boolean;
}

class Home extends React.Component<IMap, HomeState> {
    constructor(props: IMap) {
        super(props);
        this.state = {
            mapImg: '',
            showEditWindow: false,
            showNewMapWindow: false,
        };
    }

    public render() {
        const showLoading = store.getState().map.loading;
        return (
            <>
                <Loading shown={showLoading} />
                {this.renderEditWindow()}
                {this.renderNewMapWindow()}
                <HomeContainer>
                    <ShowContent>
                        <CommandList
                            onLoadImg={ this.onLoadImg }
                            onPushInit={
                                () => this.setState({showNewMapWindow: true})
                            }/>
                        <HomeUnderPart
                            map={this.props} mapImg={this.state.mapImg}
                            callWindow={this.callWindow}
                            onCreateObj={this.onCreateEvent} />
                    </ShowContent>
                </HomeContainer>
            </>
        );
    }

    private onLoadImg = (mapImg: string): void => {
        this.setState({ mapImg });
    }

    private closeOverlay = (): void => {
        this.setState({ showEditWindow: false });
    }

    private onSubmit = (edited: IEventObject): void => {
        this.setState({ showEditWindow: false });
        store.dispatch(createUpdateEventAction(edited));
    }

    private callWindow = (target: IEventObject) => {
        this.setState({ nowTargetEvent: target, showEditWindow: true });
    }

    private onCreateEvent = (pos: IPos) => {
        const newEvent = createEventObject(pos);
        // update store
        store.dispatch(createAddEventObjAction(newEvent));
        // display window
        this.setState({ nowTargetEvent: newEvent, showEditWindow: true });
    }

    private onDeleteObject = (obj: IEventObject) => {
        if(!confirm('このイベントを削除しますか？')) return;
        store.dispatch(createDeleteEventObjAction(obj));
        this.setState({ showEditWindow: false });
    }

    private renderEditWindow = () => {
        const { showEditWindow, nowTargetEvent } = this.state;
        if (!nowTargetEvent || !showEditWindow) return null;
        return (
            <EventEditWindow
                nowTarget={nowTargetEvent}
                onClose={this.closeOverlay}
                onSubmit={this.onSubmit}
                onDeleteObj={this.onDeleteObject}
            />
        );
    }

    private renderNewMapWindow = () => {
        const { showNewMapWindow } = this.state;
        const _onCancel = () => this.setState({ showNewMapWindow: false });
        if(!showNewMapWindow) return;
        return (
            <NewMapWindow
                onCancel={_onCancel}
                onSubmit={this.onSubmitNewMapWindow}
            />
        );
    }

    private onSubmitNewMapWindow = (imgPath: string, folderPath: string) => {
        this.setState({ showNewMapWindow: false });
        store.dispatch(
            createNewMapSetAction(
                store.dispatch, imgPath, folderPath, this.onLoadImg,
            )
        );
    }
}

const stateToProps = (state: IState) => {
    return state.map;
}

export default connect(stateToProps)(Home);
