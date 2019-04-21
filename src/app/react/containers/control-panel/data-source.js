import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import DataSource from 'app/react/components/control-panel/data-source';
import {
  setDayStartEnd,
} from 'app/redux/actions/data-source';
import { fetchLocations } from 'app/redux/actions/location';
import { dateToUnixTimestamp, unixTimestampToDate } from 'app/util/time';

/**
 * Container for controlling the value of parameters passed to the data source options in the
 * control panel.
 */
const DataSourceContainer = ({
  timestamp,
  fieldWidth,
  handleDayChange,
}) => (
  <div>
    <DataSource
      timestampStart={unixTimestampToDate(timestamp.start)}
      fieldWidth={fieldWidth}
      onDayChange={handleDayChange}
    />
  </div>
);

DataSourceContainer.propTypes = {
  timestamp: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  }).isRequired,
  fieldWidth: PropTypes.number.isRequired,
  handleDayChange: PropTypes.func.isRequired,
};

DataSourceContainer.defaultProps = {
};

const mapStateToProps = ({ context, dataSource }) => ({
  fieldWidth: context.isCompact ? (context.width - 140) / 2 : 200,
  timestamp: dataSource.timestamp,
});

const mapDispatchToProps = (dispatch) => {
  // Execute a location data fetch after every eligible parameter change
  const withLocationFetch = (func) => (actionCreator) => {
    const dispatcher = func(actionCreator);
    return (...args) => {
      dispatcher(...args);
      dispatch(fetchLocations());
      return dispatcher;
    };
  };

  // Wrapper around the timestamp setters that properly converts the input date to a timestamp
  const setTimestampValue = (func) => (evt) =>
    dispatch(func(dateToUnixTimestamp(evt.target.value)));

  return {
    handleDayChange: withLocationFetch(setTimestampValue)(setDayStartEnd),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DataSourceContainer);
