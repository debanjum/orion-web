export const SET_TIMESTAMP_START = 'SET_TIMESTAMP_START';
export const SET_TIMESTAMP_END = 'SET_TIMESTAMP_END';
export const SET_DAY_START_END = 'SET_DAY_START_END';
export const SET_PREVIOUS_DAY = 'SET_PREVIOUS_DAY';
export const SET_NEXT_DAY = 'SET_NEXT_DAY';

/**
 * Set the beginning timestamp range for queried data.
 *
 * @param {number} timestamp Unix timestamp denoting the beginning range.
 * @return {Object} Action for setting the starting timestamp.
 */
export const setTimestampStart = (timestamp) => ({
  type: SET_TIMESTAMP_START,
  payload: { timestamp },
});

/**
 * Set the ending timestamp range for queried data.
 *
 * @param {number} timestamp Unix timestamp denoting the ending range.
 * @return {Object} Action for setting the ending timestamp.
 */
export const setTimestampEnd = (timestamp) => ({
  type: SET_TIMESTAMP_END,
  payload: { timestamp },
});

/**
 * Set the timestamp range for single day queried data.
 *
 * @param {number} timestamp Unix timestamp denoting the beginning of the day range.
 * @return {Object} Action for setting the starting and ending timestamps.
 */
export const setDayStartEnd = (timestamp) => ({
  type: SET_DAY_START_END,
  payload: { timestamp },
});

/**
 * Set the timestamp range to previous day for querying data.
 *
 * @param {number} timestamp Unix timestamp denoting the beginning range of the time range.
 * @return {Object} Action for setting the starting and ending timestamps to previous day.
 */
export const setPreviousDayStartEnd = () => ({
  type: SET_PREVIOUS_DAY,
  payload: { },
});

/**
 * Set the timestamp range to next day for querying data.
 *
 * @param {number} timestamp Unix timestamp denoting the beginning range of the time range.
 * @return {Object} Action for setting the starting and ending timestamps to next day.
 */
export const setNextDayStartEnd = () => ({
  type: SET_NEXT_DAY,
  payload: { },
});
