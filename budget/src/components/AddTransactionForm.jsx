import {React} from 'react';
import { useForm } from "react-hook-form";
export default function AddTransactionForm( { places, onSaveTransaction = (f) => {} } ) {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        const {user, place, amount, date} = data;
        onSaveTransaction(user, place, parseInt(amount), date);
        reset();
    }

    const LabelInput = ({label, type, defaultValue, validation, ...rest}) => {
        return (
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor={label}>{label}</label>
                <input 
                {...register(label, validation)}
                type={type}
                placholder={label}
                name={label}
                id={label}
                defaultValue={defaultValue}
                {...rest}
                />
                {errors[label] && <p className="text-red-500">{errors[label].message}</p>}
            </div>
        );
    }

    return(
        <>
        <form className="m-5" onSubmit={handleSubmit(onSubmit)}>

            <LabelInput 
                label="user" 
                type="text" 
                defaultValue="" 
                validation={{
                    required: 'User is required',
                    minLength: {
                        value: 2, message: 'User should be at least two characters'
                    }
                }}
            />

            <LabelInput 
                label="date" 
                type="date"
                validation={{
                    required: 'Date is required'
                }}
            />
        

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="place"> where</label>
                <select 
                name="place" 
                id="place" 
                {...register('place')}
 
                > 
                    {places.map((p, index) => (
                        <option key={index} value={p.name}>
                            {p.name}
                        </option>
                    ))}
                </select>    
            </div>
            
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="amount">amount</label>
                <input 
                    type="number" 
                    placeholder="amount" 
                    name="amount" 
                    id="amount"                     
                    {...register(
                        'amount',
                        {
                            required: 'Amount of money spent is required',
                            min: {value: 1, message: 'At least spend 1 dollar!'},
                        }
                    )}
                />
            </div>
            {errors?.amount?.message && (
                <div>
                    {errors.amount.message}
                </div>
            )}

            <div className="col-span-6 sm:col-span-3">
                <button>
                        submit
                </button>
            </div>
        </form>
        </>
    );
}

