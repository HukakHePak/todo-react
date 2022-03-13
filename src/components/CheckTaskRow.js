import { useState } from "react";

export function CheckTaskRow(props) {
    const { className, onChecked, value, onRemove } = props;
    const [isChecked, setChecked] = useState(false);

    const ownClass = `${className} task-row `;

    return (
        <li className={ ownClass }>
            <input className={ ` ${ownClass}__check-box` }
                type="checkbox" 
                value={ isChecked } 
                onChange={ () => {
                    setChecked(!isChecked);

                    if(onChecked) onChecked(isChecked);
                }} />

            <input className={ ` ${ownClass}__text` }
                readOnly
                type="text" value={ value } />

            <button className={ ` ${ownClass}__close-btn` } onClick={ onRemove } />
        </li>
    );
}

 /* deactive input */