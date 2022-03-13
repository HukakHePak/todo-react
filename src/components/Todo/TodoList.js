import './TodoList.css';
import { useEffect, useState } from "react";
import { CheckTaskRow } from "../Task/CheckTaskRow";
import { CreateTaskBar } from "../Task/CreateTaskBar";
import uniqid from 'uniqid';
import jsStorage from "js-storage";

export function TodoList(props) {
    const { className, title, placeholder } = props;

    const name = 'todo-list';
    const ownClass = className+ ' ' + name;

    const taskStorage = jsStorage.initNamespaceStorage(title + ' ' + name).localStorage;

    const [ tasks, setTasks ] = useState(taskStorage.get(name) || []);

    useEffect(() => taskStorage.set(name, tasks));

    function sortByCheck(task) {
        return task.checked ? 1 : -1;
    }

    function createTaskRow(task) {
        const { key, value, checked } = task;

        return (<CheckTaskRow className={ `${ownClass}__task`} key={ key } value={ value }
            checked={ checked }
            onRemove={ () => setTasks(tasks.filter( task => task.key !== key )) } 
            onChecked={ () => setTasks(tasks.map( task => {
                task.checked = task.key === key ? !task.checked : task.checked;
                return task;
            }))} />
        );
    }

    return (       
        <div className={ ownClass }>
            <span className={ `${ownClass}__title`}> { title } </span>

            <CreateTaskBar className={ `${ownClass}__create-bar`} placeholder={ placeholder }
                onCreate={ value => setTasks([...tasks, { value, key: uniqid(), checked: false }]) } />

            <ul className={ `${ownClass}__tasks`}>             
                { tasks.sort( sortByCheck ).map( createTaskRow ) }        
            </ul>
        </div>
    );
}