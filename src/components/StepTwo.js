import React from 'react'

function StepTwo(props) {
       
    const { dataForm, handleChange, nextStep, prevStep } = props
        
    return (
        <div className="steps step2">
            <ul className="circles">
                <li className='circle'></li>
                <li className='circle active2'></li>
                 <li className='circle'></li>
            </ul> 
                <input 
                    name="experience"
                    type="text" 
                    placeholder="Years of experience..." 
                    value={dataForm.experience}
                    onChange={handleChange('experience')} 
                />
                <input 
                    name="employer"
                    type="text" 
                    placeholder="Previous employer..."
                    value={dataForm.employer}
                    onChange={handleChange('employer')} 
                />
                <input 
                    name="link"
                    type="url"
                    placeholder="Link to LinkedIn..." 
                    value={dataForm.link}
                    onChange={handleChange('link')} 
                />
                <button 
                    className="steps-button"
                    onClick={() => prevStep()}
                >
                    Back
                </button>
                <button 
                    className="steps-button"
                    onClick={() => nextStep()}
                >
                    Complite application
                </button>
        </div>
    )
}

export default StepTwo
