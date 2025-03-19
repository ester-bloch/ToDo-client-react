import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

const apiUrl = "http://localhost:5074"

axios.defaults.baseURL = apiUrl;

axios.interceptors.response.use(
    response => {
      // אם הבקשה הצליחה, מחזירים את התגובה
      return response;
    },
    error => {
      // כאן תופסים את השגיאה ורושמים ללוג
      console.error('Error response:', error.response);
      return Promise.reject(error); // מחזירים את השגיאה כדי לאפשר טיפול נוסף אם נדרש
    }
  );