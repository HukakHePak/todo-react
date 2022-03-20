import './TodoList.css';
import { useEffect, useLayoutEffect, useState } from "react";
import { CheckTaskRow } from "../Task/CheckTaskRow";
import { CreateTaskBar } from "../Task/CreateTaskBar";
import uniqid from 'uniqid';
import jsStorage from "js-storage";

export function TodoList(props) {
    const { title, timeout } = props;

    const taskStorage = jsStorage.initNamespaceStorage(title + '_to-do_list').localStorage;

    const [ tasks, setTasks ] = useState(taskStorage.get('list') || []);

    // useEffect(() => {
    //     taskStorage.set('list', tasks)
    //     console.log('effect')
    // });

    // useLayoutEffect(() => {
    //     console.log('layout')
    // })

    function sortByCheck(task) {
        return task.checked ? 1 : -1;
    }

    function createTaskHandler(value) {
        if(!value) return;

        setTasks([...tasks, {
            value,
            key: uniqid(),
            checked: false,
          }
        ]); 
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
                timeout={timeout}
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