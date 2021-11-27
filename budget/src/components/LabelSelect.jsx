import {React} from 'react';

const LabelSelect = ({label, options, register, defaultValue, validation, ...rest}) => {
    <div className="col-span-6 sm:col-span-3">
        <label htmlFor={label}> where</label>
        <select 
        name={label}
        id={label}
        defaultValue={defaultValue}
        {...register(label, validation)}

        > 
            {options.map((o, index) => (
                <option key={index} value={o.name}>
                    {o.name}
                </option>
            ))}
        </select>    
    </div>
};

export default LabelSelect;