import React from 'react'

function Summary(props) {

    const { dataForm, prevStep, handleDataForm } = props
        
    return (
        <form className="steps summary">
            <ul className="circles">
                <li className='circle'></li>
                <li className='circle'></li>
                <li className='circle active3'></li>
            </ul> 
            <p className="summary-title">Your application is complete</p> 
            <hr className="summary-line"/>
            <ul className="summary-list">
                <li>{dataForm.name}</li>
                <li>{dataForm.email}</li>
                <li>{dataForm.phone}</li>
                <li>{dataForm.experience}</li>
                <li>{dataForm.employer}</li>
                <li>
                    <a href={dataForm.link} target="_blank" rel="noopener noreferrer">
                        {dataForm.link}
                    </a>
                </li>
            </ul>
            <button 
                    className="steps-button"
                    onClick={() => prevStep()}
                >
                    Back
                </button>
                <button 
                    className="steps-button"
                    onClick={handleDataForm}
                >
                    Send application
                </button>
        </form>
    )

}

export default Summary
