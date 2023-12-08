import { useState } from "react";
import "./App.css";
import Question from "./Question";
import data from "./helper/data";
function App() {

  return (
    <main>
      <div className="container">
        <h3>Question and answers about login</h3>
     
      <section className="info">
        {data.map(({ id,title,info }) => (
          <Question key={id} title={title} info={info}/>
        ))}
      </section>
      </div>
    </main>
  );
}

export default App;
