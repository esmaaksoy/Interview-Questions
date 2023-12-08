import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{answer}</p>}
    </article>
  );
};

export default Question;
