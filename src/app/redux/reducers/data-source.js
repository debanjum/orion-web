import {
  SET_USER,
  SET_DEVICE,
  SET_TIMESTAMP_START,
  SET_TIMESTAMP_END,
} from 'app/redux/actions/data-source';
import createReducer from 'app/redux/reducers/create-reducer';

const initialState = {
  user: 'user',
  device: 'phone',
  timestamp: {
    start: new Date().setHours(0, 0, 0, 0) / 1000,
    end: new Date().setHours(23, 59, 59, 999) / 1000,
  },
};

const setUserReducer = (state, action) => ({
  ...state,
  user: action.payload.user,
});

const setDeviceReducer = (state, action) => ({
  ...state,
  device: action.payload.device,
});

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
  [SET_USER]: setUserReducer,
  [SET_DEVICE]: setDeviceReducer,
  [SET_TIMESTAMP_START]: setTimestampStartReducer,
  [SET_TIMESTAMP_END]: setTimestampEndReducer,
};

export default createReducer(reducerMapping, initialState);
