export const SET_TIMESTAMP_START = 'SET_TIMESTAMP_START';
export const SET_TIMESTAMP_END = 'SET_TIMESTAMP_END';

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
 * Set the ending timestamp range for queried dat.
 *
 * @param {number} timestamp Unix timestamp denoting the ending range.
 * @return {Object} Action for setting the ending timestamp.
 */
export const setTimestampEnd = (timestamp) => ({
  type: SET_TIMESTAMP_END,
  payload: { timestamp },
});
