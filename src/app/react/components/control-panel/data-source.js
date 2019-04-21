import React from 'react';
import PropTypes from 'prop-types';
import { Label, Spacing, Text, TextField } from 'react-elemental';

/**
 * Controls for setting parameters related to the source of location data for visualization.
 */
const DataSource = ({
  timestampStart,
  fieldWidth,
  onDayChange,
}) => (
  <div>
    <Spacing size="small" bottom>
      <Text uppercase bold>
        Data source
      </Text>
    </Spacing>

    <Spacing bottom style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Label
          label="Day"
          sublabel="Day to query for location day"
        />
        <TextField
          type="date"
          value={timestampStart}
          onChange={onDayChange}
          style={{ width: `${fieldWidth + 20}px` }}
        />
      </div>
    </Spacing>
  </div>
);

DataSource.propTypes = {
  // Start of the timestamp to query
  timestampStart: PropTypes.string.isRequired,
  // Width (in pixels) of each editable field
  fieldWidth: PropTypes.number.isRequired,

  // Callback to invoke when the day timestamp is changed
  onDayChange: PropTypes.func.isRequired,
};

export default DataSource;
