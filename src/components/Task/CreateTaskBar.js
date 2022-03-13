import { useState } from "react";

export function CreateTaskBar(props) {
    const { className, onCreate, placeholder } = props;
    const ownClass = `${className} task-bar`;

    const [ value, setValue ] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        onCreate(event.target.elements.newTask.value);     
        setValue("");
    }

    return (
        <form className={ ownClass } onSubmit={ submitHandler }>
                
            <input className={ `${ownClass}__text` } value={ value } placeholder={ placeholder } 
                type="text" name="newTask" 
                onChange={ event => setValue(event.target.value) } />

            <input className={ `${ownClass}__add-btn` } type="submit" /> 
        </form>
    )
}