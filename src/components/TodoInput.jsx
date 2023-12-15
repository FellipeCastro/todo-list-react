import './TodoInput.css';

import { IoIosAdd } from "react-icons/io";

export default function TodoInput() {
    return (
        <div className='input_container'>
            <label htmlFor="">Adicione sua Tarefa: </label>
            <input type="text" placeholder='O que você tem que fazer hoje?'/>
            <button>
                <IoIosAdd />
            </button>
        </div>
    )
}