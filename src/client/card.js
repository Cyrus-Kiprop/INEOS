import React from 'react';
import './card.css';
import Data from './news.json';

const CardHeader = (props) => {
  const { image } = props;
  const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <header style={style} id={image} className="card-header">
      <h4 className="card-header--title">News</h4>
    </header>
  );
};


const CardBody = (props) => {
  const { title, text, date } = props;
  return (
    <div className="card-body">
      <p className="date">{date}</p>

      <h2>{title}</h2>

      <p className="body-content">{text}</p>
    </div>
  );
};


const Card = (props) => {
  const {title, text, date, id} = props;
  const news = (
    <div key={id}>
      <article className="card">
        <CardHeader image="https://source.unsplash.com/user/erondu/600x400" />
        <CardBody
          title={title}
          text={text}
          date={date}
        />
      </article>
    </div>
  );
  return (
    <>
      {news}
    </>

  );
};

export default Card;
