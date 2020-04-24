import { Dispatch, Store } from 'redux';
import { IState } from '../IStore';
import {
    UPDATE_EVENT,
    IUpdateEventAction,
    SHOW_EVENTS,
    IShowEventAction,
    ADD_EVENT_OBJ,
    IAddEventObjAction,
    TOGGLE_SHOWN_SPINNER,
    IToggleShownSpinnerAction,
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
