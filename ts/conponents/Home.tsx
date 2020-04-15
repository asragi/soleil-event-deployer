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

class Home extends React.Component<IMap, {}> {
    public render() {
        {console.log(this.props.eventObjs);}
        return (
            <HomeContainer>
                <ShowContent>
                    <CommandList />
                    <HomeUnderPart />
                </ShowContent>
            </HomeContainer>
        );
    }
}

const stateToProps = (state: IState) => {
    return state.map;
}

export default connect(stateToProps)(Home);
