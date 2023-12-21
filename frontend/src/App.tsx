import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/greeting')
      .then(response => {
        setGreeting(response.data.greeting);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
