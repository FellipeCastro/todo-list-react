import { MdDone, MdOutlineClose } from "react-icons/md";

import './Todos.css';

export default function Todos(props) {
    return (
        <li className="todo" key={props.id}>
            <p>{props.text}</p> 

            <div className="buttons_container">
                <button>
                    <MdDone />
                </button>
                <button>
                    <MdOutlineClose />
                </button>
            </div>
        </li>
    )
}