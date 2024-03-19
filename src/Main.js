// Main.js
import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

const initialState = {
  availableTimes: [],
};

function mainReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
}

async function fetchAPI(date) {
  try {
    const response = await fetch(`YOUR_API_ENDPOINT?date=${date}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.availableTimes; // Assuming the response contains availableTimes
  } catch (error) {
    console.error('Error fetching available times:', error);
    return [];
  }
}

function Main() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format
    const availableTimes = await fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
  };

  const updateTimes = async (selectedDate) => {
    const availableTimes = await fetchAPI(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
  };

  return (
    <div>
      <h1>Welcome to Little Lemon</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default Main;