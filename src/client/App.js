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
        const { title, date, text, _id } = info;

        return (
          // eslint-disable-next-line no-underscore-dangle
          <div key={info._id}>
            <Card
              id={_id}
              title={title}
              date={date}
              text={text}
            />
          </div>
        );
      })
    }
    </div>

  );
};
export default App;
