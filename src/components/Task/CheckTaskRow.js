import './Task.css';

export function CheckTaskRow(props) {
    const { onChecked, value, onRemove, checked } = props;

    return (
        <li className="task-row">
            <input className="task-row__check-box" 
                type="checkbox" 
                checked={ checked } 
                onChange={ onChecked } 
            />

            <p className="task-row__text"> { value } </p>

            <button className="task-row__close-btn" 
                onClick={ onRemove } > + 
            </button>
        </li>
    );
}