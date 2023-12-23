import React from 'react';

const SingleFact = ({funfacts}) => {

console.log(funfacts.caption)

  return (
    <>
      <div className="single-fun">
            <i className={`icofont ${funfacts.icon}`} />
            <div className="content">
              <span className="counter">{funfacts.counter}</span>
              <p>{funfacts.content}</p>
            </div>
          </div>
    </>
  );
};

export default SingleFact;
