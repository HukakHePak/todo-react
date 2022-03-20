import { useState } from "react";

export function CreateTaskBar(props) {
    const { onCreate } = props;

    const [ value, setValue ] = useState('');
    const [ focused, setFocus ] = useState(false);

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
                onFocus={ ()=> setFocus(true)}
                onBlur={ ()=> setFocus(false)}
            />
            <div className={"task-bar-line " + (focused && "task-bar-line--active")}></div>
        </form>
    )
}