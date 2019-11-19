import React from 'react'

function StepOne(props) {

    const { dataForm, handleChange, nextStep } = props

    return (
        <div className="steps step1">
                <ul className="circles">
                    <li className='circle active1'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                </ul> 
                <input 
                    type="text" 
                    placeholder="Name..." 
                    value={dataForm.name} 
                    onChange={handleChange('name')} 
                />
                <input 
                    type="email"
                    placeholder="Email..." 
                    value={dataForm.email} 
                    onChange={handleChange('email')}
                />
                <input 
                    name="phone" 
                    type="number" 
                    placeholder="Phone..." 
                    value={dataForm.phone} 
                    onChange={handleChange('phone')}
                /> 
                <button 
                    className="steps-button"
                    onClick={nextStep}
                >
                    Next
                </button> 
            </div>
    )
}

export default StepOne
