import { Store } from "redux";
import { IState } from '../IStore';
import { ITask } from '../states/ITask';
import { saveState } from '../utils/TaskFileIF';
import { 
    ADD_TASK,
    DELETE_TASK,
    IAddTaskAction,
    IDeleteAction,
    IShowTaskAction,
    IToggleCompleteAction,
    IToggleShownSpinnerAction,
    SHOW_TASKS,
    TOGGLE_COMPLETE_TASK,
    TOGGLE_SHOWN_SPINNER,
} from "./TaskActions";

export const createShowTaskAction = (tasks: ITask[]): IShowTaskAction => {
    return {
        tasks: tasks,
        type: SHOW_TASKS,
    };
};

export const createAddTaskAction =
    (taskName: string, deadline: Date, store: Store<IState>): IToggleShownSpinnerAction => {
    /*(async () => {
        const addAction: IAddTaskAction = {
            deadline,
            taskName,
            type: ADD_TASK,
        };
        store.dispatch(addAction);
        const taskList = store.getState().taskList;
        await saveState(taskList.tasks);
        store.dispatch<IToggleShownSpinnerAction>({
            type: TOGGLE_SHOWN_SPINNER,
        });
    })();*/
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};

export const createToggleCompleteAction =
    (taskId: string, store: Store<IState>): IToggleShownSpinnerAction => {
        /*(async () => {
            store.dispatch<IToggleCompleteAction>( { taskId, type: TOGGLE_COMPLETE_TASK });
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();*/
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};

export const createDeleteTaskAction =
    (taskId: string, store: Store<IState>): IToggleShownSpinnerAction => {
        /*(async () => {
            store.dispatch<IDeleteAction>( { taskId, type: DELETE_TASK });
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();*/
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};
