import './Task.css';

export function CheckTaskRow(props) {
    const { className, onChecked, value, onRemove, checked } = props;
    const ownClass = `${className} task-row`;

    return (
        <li className={ ownClass }>
            <input className={ ` ${ownClass}__check-box` } checked={ checked } type="checkbox" 
                onChange={ onChecked } />

            <p className={ ` ${ownClass}__text` }> { value } </p>
            <button className={ ` ${ownClass}__close-btn` } onClick={ onRemove } />
        </li>
    );
}