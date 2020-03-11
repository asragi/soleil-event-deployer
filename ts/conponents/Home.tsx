import React from 'react';
import Styled from 'styled-components';
import { CommandList } from './CommandList';
import { HomeUnderPart } from './HomeUnderPart';

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

class Home extends React.Component<{}, {}> {
    public render() {
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

export default Home;
