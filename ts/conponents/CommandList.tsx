import React from 'react'
import Styled from 'styled-components'
import { CommandIcon } from './CommandIcon';
import store from '../Store';
import { createLoadEventsAction } from '../actions/EventActionCreator';

// #region styled
const Container = Styled.div`
    display: flex;
    width: 100%;
    height: 36px;
    align-items: center;
`;

// #endregion
export class CommandList extends React.Component<{}, {}> {
    public render() {
        return (
            <Container>
                <CommandIcon onClick={this.LoadData}/>
                <CommandIcon />
                <CommandIcon />
            </Container>
        );
    }

    private LoadData = async () => {
        store.dispatch(createLoadEventsAction(store.dispatch));
    }
}
