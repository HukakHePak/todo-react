import { useEffect, useLayoutEffect, useState } from "react";
import "./Task.css";

export function CheckTaskRow(props) {
  const { onChecked, value, onRemove, checked, timeout } = props;

  const [ style, setStyle ] = useState('task-row--start');

  useEffect(() => {
    if(style === 'task-row--start') {
      setTimeout(() => setStyle(''), 0);
    }
  })

  let time = 0;

  return (
    <li
      className={"task-row " + (checked ? "task-row--checked" : "") + ' ' + style }
      onMouseDown={() => {
        time = new Date();

        setTimeout(() => {
          if (time === 0) return;

          setStyle('task-row--finish');
          setTimeout(() => onRemove(), 500);
        }, timeout);
      }}
      onMouseUp={() => {
        if (new Date() - time > timeout) return;

        onChecked();
        time = 0;
      }}
    >
      <p className="task-row__text"> {value} </p>
    </li>
  );
}
