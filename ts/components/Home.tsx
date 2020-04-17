import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { CommandList } from './CommandList';
import { HomeUnderPart } from './HomeUnderPart';
import { IMap } from '../states/IEvent';
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
}

class Home extends React.Component<IMap, HomeState> {
    constructor(props: IMap) {
        super(props);
        this.state = {mapImg: ''};
    }

    public render() {
        const { eventObjs } = this.props;
        return (
            <HomeContainer>
                <ShowContent>
                    <CommandList onLoadImg={ this.onLoadImg }/>
                    <HomeUnderPart map={this.props} mapImg={this.state.mapImg} />
                </ShowContent>
            </HomeContainer>
        );
    }

    private onLoadImg = (mapImg: string): void => {
        this.setState({ mapImg: mapImg });
    }
}

const stateToProps = (state: IState) => {
    return state.map;
}

export default connect(stateToProps)(Home);
