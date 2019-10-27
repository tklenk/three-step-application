import React from 'react'

function StepOne(props) {

    const { name, email, phone, handleChange, nextStep } = props

    return (
        <form className="steps step1">
            <ul className="circles">
                <li className='circle active1'></li>
                <li className='circle'></li>
                <li className='circle'></li>
            </ul> 
            <input 
                type="text" 
                placeholder="Name..." 
                name={name} 
                onChange={handleChange('name')} 
            />
            <input 
                name="email" 
                type="email"
                placeholder="Email..." 
                email={email} 
                onChange={handleChange('email')} 
            />
            <input 
                name="phone" 
                type="tel" 
                placeholder="Phone..." 
                phone={phone} 
                onChange={handleChange('phone')} 
            />            
            <button 
                className="steps-button"
                onClick={() => nextStep()}
            >
                Next
            </button>
        </form>       
    )
}

export default StepOne
