import './TodoList.css';
import { useEffect, useState } from "react";
import { CheckTaskRow } from "../Task/CheckTaskRow";
import { CreateTaskBar } from "../Task/CreateTaskBar";
import { createTask } from '../../todo/createTask';
import jsStorage from "js-storage";

export function TodoList(props) {
    const { title, list } = props;

    const storage = jsStorage.initNamespaceStorage(title + '_to-do_list').localStorage;

    const [ tasks, setTasks ] = useState(storage.get('list') || list || []);

    useEffect(() => storage.set('list', tasks.length ? tasks : undefined));

    function sortByCheck(task) {
        return task.checked ? 1 : -1;
    }

    function createTaskHandler(value) {
        if(!value) return;

        setTasks([...tasks, createTask(value)]); 
    }

    function createTaskRow(task) {
        const { key, value, checked } = task;

        return (
            <CheckTaskRow
                key={ key } 
                value={ value }
                checked={ checked }
                onRemove={ () => 
                    setTasks(tasks.filter( task => task.key !== key )) 
                } 
                onChecked={ () => 
                    setTasks(tasks.map( task => {
                        task.checked = task.key === key ? !task.checked : task.checked;
                        return task;
                    }))
                }
            />
        );
    }

    return (       
        <div className="todo-list">
            <span className="todo-list__title">
                { title } 
            </span>

            <CreateTaskBar 
                onCreate={ createTaskHandler }
            />

            <ul className="todo-list__tasks" >           
                { tasks.sort( sortByCheck ).map( createTaskRow ) }        
            </ul>
        </div>
    );
}