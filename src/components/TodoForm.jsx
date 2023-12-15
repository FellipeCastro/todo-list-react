import { useState, useRef } from 'react';

import { IoIosAdd } from "react-icons/io";

import './TodoForm.css';

export default function TodoInput(props) {
    const [value, setValue] = useState("")
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) return
        props.addTodo(value)
        setValue("")
        inputRef.current.focus();

    }

    return (
        <form className='input_container' onSubmit={handleSubmit} autoComplete='off'>
            <label htmlFor="input">Adicione sua Tarefa: </label>
            <input 
                id='input'
                ref={inputRef}
                type="text" 
                placeholder='O que você tem que fazer hoje?' 
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
            />
            <button type='submit'>
                <IoIosAdd />
            </button>
        </form>
    )
}