import {React} from 'react';

const LabelInput = ({label, type, id, name, placeholder, errors, register, defaultValue, validation, ...rest}) => {
    return (
        <div className="col-span-6 sm:col-span3"> 
        <label htmlFor={label}>
        </label>
        <input {...register(label, validation)} 
            defaultValue={defaultValue}
            type={type} 
            id={label}
            name={label}
            placeholder={label} 
            {...rest}
        />
        {errors[label] && <p className="text-red-500">{errors[label].message}</p>}
        </div>
    );
}

export default LabelInput;