import {
  SET_TIMESTAMP_START,
  SET_TIMESTAMP_END,
} from 'app/redux/actions/data-source';
import createReducer from 'app/redux/reducers/create-reducer';

const initialState = {
  timestamp: {
    start: new Date(new Date().setDate((new Date().getDate() - 1))).setHours(0, 0, 0, 0) / 1000,
    end: new Date().setHours(0, 0, 0, 0) / 1000,
  },
};

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

const reducerMapping = {
  [SET_TIMESTAMP_START]: setTimestampStartReducer,
  [SET_TIMESTAMP_END]: setTimestampEndReducer,
};

export default createReducer(reducerMapping, initialState);
