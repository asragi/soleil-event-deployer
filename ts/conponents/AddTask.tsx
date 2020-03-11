import 'react-datepicker/dist/react-datepicker.css';

import Moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import Styled from 'styled-components';
import { v4 as UUID } from 'uuid';

import { createAddTaskAction } from '../actions/TaskActionCreators';
import store from '../Store';
import { $COLOR_SECONDARY_1_3 } from './FoundationStyles';

interface IProps {
    taskName: string;
    deadline: Date;
}

//#region styled
const Container = Styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 1em 0;
    width: 100%;
`;

const TextBox = Styled.input`
    box-sizing: border-box;
    width: 100%;
`;

const TaskNameBox = Styled.p`
    flex-grow: 1;
`;

const DeadlineBox = Styled.div`
`;

const AddButton = Styled.button`
    background-color: ${$COLOR_SECONDARY_1_3};
    border-radius: 50%;
    color: white;
    display: block;
    font-size: 150%;
    height: 40px;
    padding: 0;
    width: 40px;
`;

//#endregion

export class AddTask extends React.Component<IProps, {}> {
    public render() {
        const date = Moment(this.props.deadline);
        const taskNameId = UUID();
        const deadlineId = UUID();
        return (
            <Container>
                <TaskNameBox>
                    <label htmlFor={taskNameId}>task name</label>
                    <TextBox id={taskNameId} type="text" value={this.props.taskName}
                        onChange={() => {/* ここは後で */ }} />
                </TaskNameBox>
                <DeadlineBox>
                    <label htmlFor={deadlineId}>dead line</label>
                </DeadlineBox>
                <AddButton onClick={this.onClickAdd}>+</AddButton>
            </Container>
        );
    }

    private onClickAdd = (e: React.MouseEvent) => {
        store.dispatch(createAddTaskAction(this.props.taskName, this.props.deadline));
        const m = Moment(new Date()).add(1, 'days');
        this.setState({
            deadline: m.toDate(),
            taskName: '',
        });
    }
}