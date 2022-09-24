import { useState } from 'react';

import { data } from './data';
import { SingletonQuestion } from './SingletonQuestion';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <section className="container">
        <div>
          {/* <img src="../src/assets/images/bg-pattern-desktop.svg" alt="" />
          <img src="../src/assets/images/illustration-box-desktop.svg" alt="" /> */}
        </div>
        <div className="accordion-wrapper">
          {questions.map(question => {
            return <SingletonQuestion key={question.id} {...question} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
