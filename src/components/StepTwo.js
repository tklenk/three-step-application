import React from 'react'

function StepTwo(props) {
       
    const { experience, employer, link, handleChange, nextStep } = props
        
    return (
        <form className="steps step2">
            <ul className="circles">
                <li className='circle'></li>
                <li className='circle active2'></li>
                 <li className='circle'></li>
            </ul> 
                <input 
                    name="experience"
                    type="text" 
                    placeholder="Years of experience..." 
                    experience={experience}
                    onChange={handleChange('experience')} 
                />
                <input 
                    name="employer"
                    type="text" 
                    placeholder="Previous employer..."
                    employer={employer}
                    onChange={handleChange('employer')} 
                />
                <input 
                    name="link"
                    type="url"
                    placeholder="Link to LinkedIn..." 
                    link={link}
                    onChange={handleChange('link')} 
                />
                <button 
                    className="steps-button"
                    onClick={() => nextStep()}
                >
                    Complite application
                </button>
        </form>
    )
}

export default StepTwo
