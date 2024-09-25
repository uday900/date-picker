import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';
// import { useDatePicker } from '../context/DatePickerContext';

const DateRangePicker = () => {
  const { state, dispatch } = useDatePicker();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Start Date:</label>
        <input
          type="date"
          value={state.startDate || ''}
          onChange={(e) => dispatch({ type: 'SET_START_DATE', payload: e.target.value })}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">End Date (optional):</label>
        <input
          type="date"
          value={state.endDate || ''}
          onChange={(e) => dispatch({ type: 'SET_END_DATE', payload: e.target.value })}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
