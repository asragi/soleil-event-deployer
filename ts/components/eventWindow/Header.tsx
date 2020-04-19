import React from 'react';
import Styled from 'styled-components';
import { IEventObject } from '../../states/IEvent';

const Container = Styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`;

const NameBox = Styled.input`
    width: 140px;
    margin: 10px;
`;

interface IProps {
    target: IEventObject;
}

interface ILocalState {
    name: string;
}

export class Header extends React.Component<IProps, ILocalState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            name: props.target.name,
        };
    }

    public render() {
        return (
            <Container>
                <NameBox value={this.state.name} onChange={this.onChangeName}/>
            </Container>
        );
    }

    private onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState( {name: e.target.value} );
    }
}
