import {
  SET_TIMESTAMP_START,
  SET_TIMESTAMP_END,
  SET_DAY_START_END,
  SET_PREVIOUS_DAY,
  SET_NEXT_DAY,
} from 'app/redux/actions/data-source';
import createReducer from 'app/redux/reducers/create-reducer';

const initialState = {
  timestamp: {
    start: new Date(new Date().setDate((new Date().getDate() - 1))).setHours(0, 0, 0, 0) / 1000,
    end: new Date().setHours(0, 0, 0, 0) / 1000,
  },
};

const secondsInDay = 24 * 60 * 60;

const setTimestampStartReducer = (state, action) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    start: action.payload.timestamp,
  },
});

const setTimestampEndReducer = (state, action) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    end: action.payload.timestamp,
  },
});

const setDayStartEndReducer = (state, action) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    start: action.payload.timestamp,
    end: action.payload.timestamp + secondsInDay,
  },
});

const setPreviousDayReducer = (state, _) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    start: state.timestamp.start - secondsInDay,
    end: state.timestamp.end - secondsInDay,
  },
});

const setNextDayReducer = (state, _) => ({
  ...state,
  timestamp: {
    ...state.timestamp,
    start: state.timestamp.start + secondsInDay,
    end: state.timestamp.end + secondsInDay,
  },
});

const reducerMapping = {
  [SET_TIMESTAMP_START]: setTimestampStartReducer,
  [SET_TIMESTAMP_END]: setTimestampEndReducer,
  [SET_DAY_START_END]: setDayStartEndReducer,
  [SET_PREVIOUS_DAY]: setPreviousDayReducer,
  [SET_NEXT_DAY]: setNextDayReducer,
};

export default createReducer(reducerMapping, initialState);
