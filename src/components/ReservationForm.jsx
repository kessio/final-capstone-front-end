import React, { useState } from 'react';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [item, setItem] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      date,
      city,
      item,
      username,
    };
    axios
      .post('/reservations', { reservation })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservation;
