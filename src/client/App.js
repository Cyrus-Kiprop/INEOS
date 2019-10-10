import React, { useState, useEffect } from 'react';
import './app.css';
import Card from './card';

const App = () => {
  const [data, setdata] = useState(null);

  async function fetchProduct() {
    const response = await fetch('/api/getUsername');
    const json = await response.json();
    setdata(json);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {data && data.map((info) => {
        const { name, age, city } = info;
        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={info._id}>
            <h1>{name}</h1>
            <p>{`My name is ${name}. I am ${age} and live in ${city}`}</p>
            <Card />
          </div>
        );
      })
    }
    </div>

  );
};
export default App;
