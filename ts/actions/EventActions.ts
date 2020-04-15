import { Action } from 'redux';
import { v4 as UUID } from 'uuid';
import { IEventObject } from "../states/IEvent"

export const SHOW_EVENTS = UUID();

export interface IShowEventAction extends Action {
    events: IEventObject[];
}
