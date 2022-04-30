import React from "react";

const ServiceItem = ({ index, name, description }) => {
  return (
    <>
      <div className='services__box'>
        <h2 className='services__box-h2'>{index}</h2>
        <h3 className='services__box-h3'> {name} </h3>
        <p className='services__box-p'>{description}</p>
      </div>
    </>
  );
};

export default ServiceItem;
