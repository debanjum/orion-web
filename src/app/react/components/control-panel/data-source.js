import React from 'react';
import PropTypes from 'prop-types';
import { Spacing, Text, TextField, Button } from 'react-elemental';

/**
 * Controls for setting parameters related to the source of location data for visualization.
 */
const DataSource = ({
  timestampStart,
  fieldWidth,
  onDayChange,
  previousDayChange,
  nextDayChange,
}) => (
  <div>
    <Spacing size="small" bottom>
      <Text uppercase bold>
        Date
      </Text>
    </Spacing>

    <Spacing bottom style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        text="Previous"
        onClick={previousDayChange}
        style={{ width: `${fieldWidth + 8}px` }}
        secondary
      />

      <div>
        <TextField
          type="date"
          value={timestampStart}
          onChange={onDayChange}
          style={{ width: `${fieldWidth + 8}px` }}
        />
      </div>

      <Button
        text="Next"
        onClick={nextDayChange}
        style={{ width: `${fieldWidth + 8}px` }}
        secondary
      />
    </Spacing>
  </div>
);

DataSource.propTypes = {
  // Start of the timestamp to query
  timestampStart: PropTypes.string.isRequired,
  // Width (in pixels) of each editable field
  fieldWidth: PropTypes.number.isRequired,

  // Callback to invoke when the day timestamp is updated via input field
  onDayChange: PropTypes.func.isRequired,
  // Callback to invoke when location data for the previous day is requested
  previousDayChange: PropTypes.func.isRequired,
  // Callback to invoke when location data for the next day is requested
  nextDayChange: PropTypes.func.isRequired,
};

export default DataSource;
