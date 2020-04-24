import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { IState } from '../IStore';
// component
import { CommandList } from './CommandList';
import { HomeUnderPart } from './HomeUnderPart';
import { EventEditWindow } from './EventEditWindow';
import { IMap, IEventObject } from '../states/IEvent';
// dispatch
import store from '../Store';
import { createUpdateEventAction } from '../actions/EventActionCreator';

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
    shown: boolean;
}

class Home extends React.Component<IMap, HomeState> {
    constructor(props: IMap) {
        super(props);
        this.state = {
            mapImg: '',
            shown: false,
        };
    }

    public render() {
        return (
            <>
                {this.renderEditWindow()}
                <HomeContainer>
                    <ShowContent>
                        <CommandList onLoadImg={ this.onLoadImg }/>
                        <HomeUnderPart
                            map={this.props} mapImg={this.state.mapImg}
                            callWindow={this.callWindow} />
                    </ShowContent>
                </HomeContainer>
            </>
        );
    }

    private onLoadImg = (mapImg: string): void => {
        this.setState({ mapImg });
    }

    private closeOverlay = (): void => {
        this.setState({ shown: false });
    }

    private onSubmit = (edited: IEventObject): void => {
        this.setState({ shown: false });
        store.dispatch(createUpdateEventAction(edited));
    }

    private callWindow = (target: IEventObject) => {
        this.setState({ nowTargetEvent: target, shown: true });
    }

    private renderEditWindow = () => {
        const { shown, nowTargetEvent } = this.state;
        if (!nowTargetEvent || !shown) return null;
        return (
            <EventEditWindow
                nowTarget={nowTargetEvent}
                onClose={this.closeOverlay}
                onSubmit={this.onSubmit}
            />
        );
    }
}

const stateToProps = (state: IState) => {
    return state.map;
}

export default connect(stateToProps)(Home);
