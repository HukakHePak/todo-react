import { useState } from "react";

export function CreateTaskBar(props) {
    const { onCreate } = props;

    const [ value, setValue ] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        onCreate(event.target.elements.newTask.value);     
        setValue("");
    }

    return (
        <form className="task-bar" onSubmit={ submitHandler }>
                
            <input className="task-bar__text-inp"
                placeholder="Write your task"
                type="text"
                name="newTask"
                autoComplete="off"
                value={ value } 
                onChange={ event => setValue(event.target.value) } 
            />

            <input className="task-bar__add-btn" type="submit" value="+" /> 
        </form>
    )
}