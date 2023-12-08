import { useState } from "react";
import "./App.css";
import Question from "./Question";
import data from "./helper/data";
function App() {

  return (
    <main>
      <div className="container">
        <h3>REACT Interview Ouestions And Answers</h3>
      <section className="info">
        {data.map(({ id,question,answer }) => (
          <Question key={id} question={question} answer={answer}/>
        ))}
      </section>
      </div>
    </main>
  );
}

export default App;
