import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';
// import { useDatePicker } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { state, dispatch } = useDatePicker();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Recurrence Type:</label>
        <select
          value={state.recurrenceType}
          onChange={(e) => dispatch({ type: 'SET_RECURRENCE_TYPE', payload: e.target.value })}
          className="mt-1 block w-full p-2 border rounded"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Every:</label>
        <input
          type="number"
          min="1"
          value={state.recurrenceFrequency}
          onChange={(e) => dispatch({ type: 'SET_RECURRENCE_FREQUENCY', payload: e.target.value })}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;
