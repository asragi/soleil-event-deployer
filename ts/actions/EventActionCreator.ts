import { Dispatch, Store } from "redux";
import * as Yaml from 'js-yaml';
import { 
    SHOW_EVENTS,
    IShowEventAction,
    TOGGLE_SHOWN_SPINNER,
    IToggleShownSpinnerAction,
 } from './EventActions';
import { openFileDialog } from '../utils/FileDialog';
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
