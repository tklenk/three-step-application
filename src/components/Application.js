import React, { Component } from 'react'
import axios from './axios-data'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Summary from './Summary'
import Input from './Input'
class Application extends Component {
  state = {
    step: 1,
    dataFormApp: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your email'
        },
        value: ''
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your phone'
        },
        value: ''
      },
      experience: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'small', displayValue: 'Small'},
            {value: 'long', displayValue: 'Long'}
          ]
        },
        value: ''
      },
      employer: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Current employer'
        },
        value: ''
      },
      link: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'LinkedIn Profile'
        },
        value: ''
      },
    }
  }

  nextStep = () => {
    this.setState({
        step: this.state.step + 1,
    })
  }

  prevStep = () => {
    this.setState({
        step: this.state.step - 1,
    })
  }  

  inputChangedHandler = (event, input) => {
    // console.log(event.target.value)
    const updatedDataFormApp = {
      ...this.state.dataFormApp
    }
    const updatedFormElement = {
      ...updatedDataFormApp[input]
    }
    updatedFormElement.value = event.target.value
    updatedDataFormApp[input] = updatedFormElement
    this.setState({dataFormApp: updatedDataFormApp})
  }

  handleDataForm = (event) => {
    event.preventDefault()

    const dataForm = {}
    for (let formElementIdentifier in this.state.dataFormApp) {
      dataForm[formElementIdentifier] = this.state.dataFormApp[formElementIdentifier].value
    }
    const data = {
      dataFormApp: dataForm
    }
    axios.post('/data.json', data)
      .then(response => console.log(response))
      .catch(error => console.log(error))

    alert("Your data is submitted successfully")
  }

  render() {   
      
    const { step, name, email, phone, experience, employer, link } = this.state
    const dataForm = { step, name, email, phone, experience, employer, link }

    const formElementsArray = []
    for (let key in this.state.dataFormApp) {
      formElementsArray.push({
        id: key,
        config: this.state.dataFormApp[key]
      })
    }
    return (
      <form className="steps step1" onSubmit={this.handleDataForm} >
                <ul className="circles">
                    <li className='circle active1'></li>
                    <li className='circle'></li>
                    <li className='circle'></li>
                </ul> 
              
                {formElementsArray.map(formElement => (
                  <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changedInput={(event) => this.inputChangedHandler(event, formElement.id)}
                  />
                ))}
                <button className="steps-button" onClick={this.nextStep}>Next</button> 
            </form>
    )
  }
}

export default Application;
