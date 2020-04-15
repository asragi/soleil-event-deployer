import { Dispatch, Store } from "redux";
import * as Yaml from 'js-yaml';
import { IState } from '../IStore';
import { ITask } from '../states/ITask';
import { loadTask, saveState } from '../utils/TaskFileIF';
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
    IShowEventAction,
    SHOW_EVENTS,
} from "./TaskActions";
import { openFileDialog } from '../utils/FileDialog';
import { IEventObject } from "../states/IEvent";

export const createShowTaskAction = (tasks: ITask[]): IShowTaskAction => {
    return {
        tasks: tasks,
        type: SHOW_TASKS,
    };
};

export const createShowMapAction = (eventObjs: IEventObject[]): IShowEventAction => {
    return {
        events: eventObjs,
        type: SHOW_EVENTS
    }
}

export const createAddTaskAction =
    (taskName: string, deadline: Date, store: Store<IState>): IToggleShownSpinnerAction => {
    (async () => {
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
    })();
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};

export const createToggleCompleteAction =
    (taskId: string, store: Store<IState>): IToggleShownSpinnerAction => {
        (async () => {
            store.dispatch<IToggleCompleteAction>( { taskId, type: TOGGLE_COMPLETE_TASK });
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};

export const createDeleteTaskAction =
    (taskId: string, store: Store<IState>): IToggleShownSpinnerAction => {
        (async () => {
            store.dispatch<IDeleteAction>( { taskId, type: DELETE_TASK });
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();
    return {
        type: TOGGLE_SHOWN_SPINNER,
    };
};

export const createLoadTasksAction = (dispatch: Dispatch): IToggleShownSpinnerAction => {
    let tasks: ITask[] = [];
    loadTask().then((jsonData) => {
        tasks = jsonData.data as ITask[];
        dispatch(createShowTaskAction(tasks));
        dispatch<IToggleShownSpinnerAction>({
            type: TOGGLE_SHOWN_SPINNER,
        });
    });
    // loadtask()は非同期のためこのreturnが先．
    return {
        type: TOGGLE_SHOWN_SPINNER,
    }
}

export const createLoadEventsAction =
    (dispatch: Dispatch): IToggleShownSpinnerAction => {
        (async () => {
            const yamldata = await openFileDialog([]);
            if (!yamldata) {
                alert("Cannot load file!");
                dispatch<IToggleShownSpinnerAction>({
                    type: TOGGLE_SHOWN_SPINNER,
                });
                return;
            }
            const data = Yaml.safeLoad(yamldata.toString());
            const eventObjs = data as IEventObject[];
            dispatch(createShowMapAction(eventObjs));
            dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();
        return {
            type: TOGGLE_SHOWN_SPINNER,
        }
}
