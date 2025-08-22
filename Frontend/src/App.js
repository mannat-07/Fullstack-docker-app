import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setTime(data.time))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Frontend</h1>
      <p>Backend Time: {time ? time : 'Loading...'}</p>
    </div>
  );
}

export default App;
