import { useState } from "react";

const Question = ({ title, info }) => {

    const [show,setShow] = useState(false)
  return (
    <article className="question">
      <div>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setShow(!show)}></button>
      </div>
    </article>
  );
};

export default Question;
