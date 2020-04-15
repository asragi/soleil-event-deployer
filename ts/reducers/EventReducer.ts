import Clone from 'clone';
import Redux from 'redux';
import * as Action from '../actions/EventActions';
import { createEventObject, initMap, IMap } from '../states/IEvent';
import createA2RMapper from '../utils/ActionToReducerMapper'

const a2RMapper = createA2RMapper<IMap>();

a2RMapper.addWork<Action.IShowEventAction>(
    Action.SHOW_EVENTS,
    (state, action) => {
        state.eventObjs = Clone(action.events);
    }
);

export const EventReducer: Redux.Reducer<IMap> = (state = initMap, action) => {
    return a2RMapper.execute(state, action);
};
