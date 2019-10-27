import React from 'react'

function Summary(props) {

    const { name, email, phone, experience, employer, link } = props
        
    return (
        <div className="steps summary">
            <ul className="circles">
                <li className='circle'></li>
                <li className='circle'></li>
                <li className='circle active3'></li>
            </ul> 
            <p className="summary-title">Your application is complete</p> 
            <hr className="summary-line"/>
            <ul className="summary-list">
                <li>{name}</li>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{experience}</li>
                <li>{employer}</li>
                <li>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Summary
