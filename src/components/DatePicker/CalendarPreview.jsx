import React from 'react';
import { useDatePicker } from '../context/DatePickerContext';
// import { useDatePicker } from '../../context/DatePickerContext';

const CalendarPreview = () => {
  const { state } = useDatePicker();

  const getPreview = () => {
    return `Starts on ${state.startDate || 'N/A'}, recurs ${state.recurrenceType} every ${state.recurrenceFrequency} days/weeks/months/years.`;
  };

  return (
    <div className="border p-4 mt-4 rounded-md">
      <h3 className="text-lg font-semibold">Preview</h3>
      <p>{getPreview()}</p>
    </div>
  );
};

export default CalendarPreview;
