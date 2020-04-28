import { Dispatch } from 'redux';
import {
    UPDATE_EVENT,
    IUpdateEventAction,
    SHOW_EVENTS,
    IShowEventAction,
    ADD_EVENT_OBJ,
    IAddEventObjAction,
    DELETE_EVENT_OBJ,
    IDeleteEventObjAction,
    TOGGLE_SHOWN_SPINNER,
    IToggleShownSpinnerAction,
    UPDATE_FOLDER_PATH,
    IUpdateFolderPath,
 } from './EventActions';
import { IEventObject} from '../states/IEvent';

export const createUpdateEventAction =
    (eventObject: IEventObject): IUpdateEventAction => {
        return {
            eventObject,
            type: UPDATE_EVENT,
        };
    };

export const createShowMapAction =
    (objs: IEventObject[]): IShowEventAction => {
    return {
        events: objs,
        type: SHOW_EVENTS,
    };
};

export const createAddEventObjAction =
    (eventObject: IEventObject): IAddEventObjAction => {
    return {
        eventObject,
        type: ADD_EVENT_OBJ,
    };
}

export const createDeleteEventObjAction =
    (eventObject: IEventObject): IDeleteEventObjAction => {
        return {
            eventObject,
            type: DELETE_EVENT_OBJ,
        }
}

export const createLoadEventsAction =
    (dispatch: Dispatch, data: IEventObject[])
        : IToggleShownSpinnerAction => {
        (async () => {
            dispatch(createShowMapAction(data));
            dispatch<IToggleShownSpinnerAction>({
                type: TOGGLE_SHOWN_SPINNER,
            });
        })();
        return {
            type: TOGGLE_SHOWN_SPINNER,
        }
};

export const createUpdateFolderPathAction =
    (folderPath: string): IUpdateFolderPath => {
        return {
            type: UPDATE_FOLDER_PATH,
            folderPath,
        };
    };
