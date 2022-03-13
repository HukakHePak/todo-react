import { useState } from "react";

export function CreateTaskBar(props) {
    const { className, onCreate, placeholder } = props;
    const ownClass = `${className} task-bar`;

    const [ value, setValue ] = useState('');

    return (
        <form className={ ownClass } onSubmit={ event=>  {
            event.preventDefault();

            const field = event.target.elements.newTask;

            onCreate(field.value);     
            setValue("");
            }}>
                
            <input className={ `${ownClass}__text` } 
                type="text" 
                placeholder={ placeholder } 
                value={ value }
                onChange={ event => setValue(event.target.value) } 
                name="newTask" 
                />

            <input className={ `${ownClass}__add-btn` } 
                type="submit" /> 
        </form>
    )
}