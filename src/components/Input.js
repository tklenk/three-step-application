import React from 'react'

const input = (props) => {
    let inputElement = null
    const inputClasses = ["inputElement"]

    if (props.invalid) {
        inputClasses.push('inputInvalid')
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changedInput} />
            break
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changedInput}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                </select>
            )
            break
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changedInput} />
    }
    return (
        <div className="input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input