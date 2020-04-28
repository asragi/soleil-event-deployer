import React from 'react';
import Styled from 'styled-components';
import { BoxButton, Image } from '../GeneralComponent';
import deleteImg from '../icons/trash.png';
import { IEventObject } from '../../states/IEvent';

//#region Style
const Container = Styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`;

const NameBox = Styled.input`
    width: 140px;
    margin: 10px;
`;

const Empty = Styled.div`
    flex-grow: 1;
`;

const DeleteButton = Styled(BoxButton)`
    margin: 5px;
`;
//#endregion

interface IProps {
    target: IEventObject;
    onChangeName: (s : string) => void;
    onDelete: () => void;
}

export class Header extends React.Component<IProps, {}> {
    public render() {
        const { target, onDelete } = this.props;
        return (
            <Container>
                <NameBox value={target.name} onChange={this.onChangeName}/>
                <Empty />
                <DeleteButton onClick={onDelete}>
                    <Image src={deleteImg} />
                </DeleteButton>
            </Container>
        );
    }

    private onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChangeName(e.target.value);
    }
}
