import { Dispatch, Store } from "redux";
import * as Yaml from 'js-yaml';
import { 
    SHOW_EVENTS,
    IShowEventAction,
    TOGGLE_SHOWN_SPINNER,
    IToggleShownSpinnerAction,
 } from './EventActions';
import { openFileDialog } from '../utils/FileDialog';
import { openDataFolder } from '../utils/OpenMapFolder';
import { IEventObject } from '../states/IEvent';

export const createShowMapAction = (objs: IEventObject[]): IShowEventAction => {
    return {
        events: objs,
        type: SHOW_EVENTS,
    };
};

export const createLoadEventsAction =
    (dispatch: Dispatch): IToggleShownSpinnerAction => {
        (async () => {
            const folderData = await openDataFolder();
            if (!folderData) {
                alert("Cannot load file!");
                dispatch<IToggleShownSpinnerAction>({
                    type: TOGGLE_SHOWN_SPINNER,
                });
                return;
            }
            const data = folderData.map;
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
