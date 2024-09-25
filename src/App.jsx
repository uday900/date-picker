import React from 'react';
import DatePicker from './components/DatePicker/DatePicker';
import './index.css'; // Import Tailwind styles
import { DatePickerProvider } from './components/context/DatePickerContext';

function App() {
  return (
    <DatePickerProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
}

export default App;
