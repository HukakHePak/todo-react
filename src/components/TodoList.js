import { useState } from "react";
import { CheckTaskRow } from "./CheckTaskRow";
import { CreateTaskBar } from "./CreateTaskBar";


export function TodoList(props) {
    const { className, title, placeholder } = props;
    const ownClass = `${className} todo-list`;

    const [ tasks, setTasks ] = useState([]);

    function createTaskRow(value, key) {
        return (<CheckTaskRow key={ key } 
            value={ value } 
            onRemove={ () => setTasks([...tasks.slice(0, key), ...tasks.slice(key + 1)]) } />);
    }

    return (       
        <div className={ ownClass }>
            <span className={ `${ownClass}__title`}> { title } </span>

            <CreateTaskBar className={ `${ownClass}__create-bar`} 
                onCreate={ value => setTasks([...tasks, value]) } 
                placeholder={ placeholder } />

            <ul className={ `${ownClass}__tasks`}>             
                { tasks.map( createTaskRow ) }        
            </ul>
        </div>
    );
}

//test placeholder