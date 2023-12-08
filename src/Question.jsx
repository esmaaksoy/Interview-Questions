import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {

    const [show,setShow] = useState(false)
  return (
    <article className="question">
      <div>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setShow(!show)}>
        {show ? <AiOutlineMinus/> : < AiOutlinePlus/>}
        </button>
 
      </div>
    </article>
  );
};

export default Question;
