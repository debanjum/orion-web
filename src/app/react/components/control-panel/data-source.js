import React from 'react';
import PropTypes from 'prop-types';
import { Label, Spacing, Text, TextField } from 'react-elemental';

/**
 * Controls for setting parameters related to the source of location data for visualization.
 */
const DataSource = ({
  timestampStart,
  timestampEnd,
  fieldWidth,
  onTimestampStartChange,
  onTimestampEndChange,
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
          label="Start date"
          sublabel="Start of the interval to query"
        />
        <TextField
          type="date"
          value={timestampStart}
          onChange={onTimestampStartChange}
          style={{ width: `${fieldWidth + 20}px` }}
        />
      </div>

      <div>
        <Label
          label="Day"
          sublabel="Day to query"
        />
        <TextField
          type="date"
          value={timestampStart}
          onChange={onDayChange}
          style={{ width: `${fieldWidth + 20}px` }}
        />
      </div>

      <div>
        <Label
          label="End date"
          sublabel="End of the interval to query"
        />
        <TextField
          type="date"
          value={timestampEnd}
          onChange={onTimestampEndChange}
          style={{ width: `${fieldWidth + 20}px` }}
        />
      </div>
    </Spacing>
  </div>
);

DataSource.propTypes = {
  // Start of the timestamp to query
  timestampStart: PropTypes.string.isRequired,
  // End of the timestamp to query
  timestampEnd: PropTypes.string.isRequired,
  // Width (in pixels) of each editable field
  fieldWidth: PropTypes.number.isRequired,


  // Callback to invoke when the starting timestamp is changed
  onTimestampStartChange: PropTypes.func.isRequired,
  // Callback to invoke when the ending timestamp is changed
  onTimestampEndChange: PropTypes.func.isRequired,
  // Callback to invoke when the day timestamp is changed
  onDayChange: PropTypes.func.isRequired,
};

export default DataSource;
