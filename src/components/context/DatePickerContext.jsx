import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  startDate: null,
  endDate: null,
  recurrenceType: 'Daily',  // Default value
  recurrenceFrequency: 1,
};

// Create context
const DatePickerContext = createContext();

// Reducer to manage state changes
const datePickerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload };
    case 'SET_RECURRENCE_TYPE':
      return { ...state, recurrenceType: action.payload };
    case 'SET_RECURRENCE_FREQUENCY':
      return { ...state, recurrenceFrequency: action.payload };
    default:
      return state;
  }
};

// Context Provider
export const DatePickerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(datePickerReducer, initialState);

  return (
    <DatePickerContext.Provider value={{ state, dispatch }}>
      {children}
    </DatePickerContext.Provider>
  );
};

// Custom hook to use context
export const useDatePicker = () => {
  return useContext(DatePickerContext);
};
