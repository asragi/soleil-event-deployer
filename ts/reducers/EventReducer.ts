import Clone from 'clone';
import Redux from 'redux';
import * as Action from '../actions/EventActions';
import { initMap, IMap } from '../states/IEvent';
import createA2RMapper from '../utils/ActionToReducerMapper'

const a2RMapper = createA2RMapper<IMap>();

a2RMapper.addWork<Action.IShowEventAction>(
    Action.SHOW_EVENTS,
    (state, action) => {
        state.eventObjs = Clone(action.events);
    }
);

a2RMapper.addWork<Action.IUpdateEventAction>(
    Action.UPDATE_EVENT,
    (state, action) => {
        const { eventObjs } = state;
        const targetObj = action.eventObject;
        const targetIndex = eventObjs.findIndex(e => e.id === targetObj.id);
        if (targetIndex === -1) return;
        eventObjs.splice(targetIndex, 1, targetObj);
    }
);

a2RMapper.addWork<Action.IAddEventObjAction>(
    Action.ADD_EVENT_OBJ,
    (state, action) => {
        state.eventObjs.push(action.eventObject);
    }
)

a2RMapper.addWork<Action.IDeleteEventObjAction>(
    Action.DELETE_EVENT_OBJ,
    (state, action) => {
        const target = action.eventObject;
        state.eventObjs = state.eventObjs.filter(e => e.id !== target.id);
    }
);

export const EventReducer: Redux.Reducer<IMap> = (state = initMap, action) => {
    return a2RMapper.execute(state, action);
};
