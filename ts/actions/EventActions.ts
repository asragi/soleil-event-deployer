import { Action } from 'redux';
import { v4 as UUID } from 'uuid';
import { IEventObject } from '../states/IEvent';

export const SHOW_EVENTS = UUID();
export interface IShowEventAction extends Action {
    events: IEventObject[];
}

export const UPDATE_EVENT = UUID();
export interface IUpdateEventAction extends Action {
    eventObject: IEventObject;
}

export const TOGGLE_SHOWN_SPINNER = UUID();
export interface IToggleShownSpinnerAction extends Action { }
