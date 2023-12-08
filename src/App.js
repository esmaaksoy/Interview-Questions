import { useState } from "react";
import "./App.css";
import Question from "./Question";
import data from "./helper/data";
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
      </div>
      <section className="info">
        {questions.map(({ id,title,info }) => (
          <Question key={id} title={title} info={info}/>
        ))}
      </section>
    </main>
  );
}

export default App;
