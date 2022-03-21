import { useEffect, useState } from "react";
import "./Task.css";

const delay = 700;
let time = 0;

export function CheckTaskRow(props) {
  const { onChecked, value, onRemove, checked } = props;

  const [ style, setStyle ] = useState('task-row--start');

  useEffect(() => {
    if(style === 'task-row--start') {
      setTimeout(() => setStyle(''), 0);
    }
  });

  return (
    <li
      className={"task-row " + (checked ? "task-row--checked" : "") + ' ' + style }
      onMouseDown={() => {
        time = new Date();

        setStyle('task-row--hold');
        
        setTimeout(() => {
          if (time === 0) return;

          setStyle('task-row--finish');
          setTimeout(() => onRemove(), delay);
        }, delay);
      }}
      onMouseUp={() => {
        if (new Date() - time > delay) return;
        
        setStyle('');
        onChecked();

        time = 0; 
       }}
    >
      <p className="task-row__text"> {value} </p>
    </li>
  );
}
