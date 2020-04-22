import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { CommandList } from './CommandList';
import { HomeUnderPart } from './HomeUnderPart';
import { EventEditWindow } from './EventEditWindow';
import { IMap, IEventObject } from '../states/IEvent';
import { IState } from '../IStore';

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
        this.setState({ mapImg: mapImg });
    }

    private closeOverlay = (): void => {
        this.setState({ shown: false });
    }

    private callWindow = (target: IEventObject) => {
        this.setState({ nowTargetEvent: target, shown: true });
    }

    private renderEditWindow = () => {
        const { shown, nowTargetEvent } = this.state;
        if (!nowTargetEvent) return null;
        return (
            <EventEditWindow
                shown={shown} nowTarget={nowTargetEvent}
                onClose={this.closeOverlay}
            />
        );
    }
}

const stateToProps = (state: IState) => {
    return state.map;
}

export default connect(stateToProps)(Home);
