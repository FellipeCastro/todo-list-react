import { MdDone, MdOutlineClose } from "react-icons/md";

import './Todos.css';

export default function Todos(props) {

    return (
        <li className={props.isCompleted ? "done" : "todo"} key={props.id}>
          <p>{props.text}</p> 
      
          <div className="buttons_container">
            <button onClick={() => props.completeTodo(props.id)}>
              <MdDone />
            </button>
            <button onClick={() => props.removeTodo(props.id)}>
              <MdOutlineClose />
            </button>
          </div>
        </li>
      )
      
} 