import {
  setTimestampStart,
  setTimestampEnd,
} from 'app/redux/actions/data-source';
import dataSourceReducer from 'app/redux/reducers/data-source';

describe('Data source reducer', () => {
  test('Set timestamp start', () => {
    const state = { timestamp: { start: 1, end: 2 } };
    const action = setTimestampStart(3);

    const expectState = { timestamp: { start: 3, end: 2 } };
    const reducedState = dataSourceReducer(state, action);

    expect(reducedState).toEqual(expectState);
  });

  test('Set timestamp end', () => {
    const state = { timestamp: { start: 1, end: 2 } };
    const action = setTimestampEnd(3);

    const expectState = { timestamp: { start: 1, end: 3 } };
    const reducedState = dataSourceReducer(state, action);

    expect(reducedState).toEqual(expectState);
  });
});
