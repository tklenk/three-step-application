import React from 'react'

const input = (props) => {
    let inputElement = null
    let validationError = null
    
    const inputClasses = ["inputElement"]

    if (props.invalid && props.shouldValidate && props.startTyping) {
        inputClasses.push('inputInvalid')
    }

    if (props.invalid && props.startTyping) {
        validationError = <p className="validationError">Please enter a valid value!</p>
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                name={props.name}
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
                name="test"
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changedInput} />
    }
    return (
        <div className="input">
            <label className="label">{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default input