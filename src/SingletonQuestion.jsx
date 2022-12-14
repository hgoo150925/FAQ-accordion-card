import { useState } from 'react';
import PropTypes from 'prop-types';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export const SingletonQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h1>{title}</h1>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

SingletonQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
