import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

const DatePicker = () => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded-md shadow-md space-y-8">
      <h1 className="text-2xl font-bold">Recurring Date Picker</h1>
      <DateRangePicker />
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
