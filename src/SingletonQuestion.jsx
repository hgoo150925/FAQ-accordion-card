import { useState } from 'react';

export const SingletonQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h1>{title}</h1>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? 'arriba' : 'abajo'}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};
