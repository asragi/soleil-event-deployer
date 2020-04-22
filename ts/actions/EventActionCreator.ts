import { Dispatch, Store } from 'redux';
import {
    SHOW_EVENTS,
    IShowEventAction,
    TOGGLE_SHOWN_SPINNER,
    IToggleShownSpinnerAction,
 } from './EventActions';
import { openDataFolder } from '../utils/OpenMapFolder';
import { IEventObject } from '../states/IEvent';

export const createShowMapAction =
    (objs: IEventObject[]): IShowEventAction => {
    return {
        events: objs,
        type: SHOW_EVENTS,
    };
};

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
}
