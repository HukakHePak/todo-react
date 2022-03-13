export function CheckTaskRow(props) {
    const { className, onChecked, value, onRemove, checked } = props;
    const ownClass = `${className} task-row `;

    return (
        <li className={ ownClass }>
            <input className={ ` ${ownClass}__check-box` } checked={ checked } type="checkbox" 
                onChange={ onChecked } />

            <input className={ ` ${ownClass}__text` } value={ value } type="text" readOnly />
            <button className={ ` ${ownClass}__close-btn` } onClick={ onRemove } />
        </li>
    );
}