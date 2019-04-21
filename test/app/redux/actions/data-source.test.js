import {
  setTimestampStart,
  setTimestampEnd,
  SET_TIMESTAMP_START,
  SET_TIMESTAMP_END,
} from 'app/redux/actions/data-source';

describe('Data source actions', () => {
  test('Set timestamp start', () => {
    expect(setTimestampStart(1)).toEqual({
      type: SET_TIMESTAMP_START,
      payload: { timestamp: 1 },
    });
  });

  test('Set timestamp end', () => {
    expect(setTimestampEnd(1)).toEqual({
      type: SET_TIMESTAMP_END,
      payload: { timestamp: 1 },
    });
  });
});
