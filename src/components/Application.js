import React, { Component } from 'react'
import axios from './axios-data'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Summary from './Summary'
import Input from './Input'

const formState = {
  formIsValid: false,
  currentStep: 1,
  steps: {
    1: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        startTyping: false
      },
    },
    2: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        startTyping: false
      },
    },
    3: {
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your phone'
        },
        value: '',
        validation: {
          required: true,
          minLength: 9,
          maxLength: 9,
          isNumeric: true
        },
        valid: false,
        startTyping: false
      },
    }
  }
}
class Application extends Component {
  state = formState
  // state = {
  //   step: 1,
  //   dataFormApp: {
  //     name: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: 'Your name'
  //       },
  //       value: '',
  //       validation: {
  //         required: true
  //       },
  //       valid: false,
  //       startTyping: false
  //     },
  //     email: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: 'Your email'
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //         isEmail: true
  //       },
  //       valid: false,
  //       startTyping: false
  //     },
  //     phone: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: 'Your phone'
  //       },
  //       value: '',
  //       validation: {
  //         required: true,
  //         minLength: 9,
  //         maxLength: 9,
  //         isNumeric: true
  //       },
  //       valid: false,
  //       startTyping: false
  //     },
  //     experience: {
  //       elementType: 'select',
  //       elementConfig: {
  //         options: [
  //           {value: '0-2', displayValue: '0-2'},
  //           {value: '2-4', displayValue: '2-4'},
  //           {value: 'more than 5', displayValue: '>5'},
  //         ]
  //       },
  //       value: '',
  //       validation: {},
  //       valid: true
  //     },
  //     employer: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: 'Current employer'
  //       },
  //       value: '',
  //       validation: {
  //         required: true
  //       },
  //       valid: false,
  //       startTyping: false
  //     },
  //     link: {
  //       elementType: 'input',
  //       elementConfig: {
  //         type: 'text',
  //         placeholder: 'LinkedIn Profile'
  //       },
  //       value: '',
  //       validation: {
  //         required: true
  //       },
  //       valid: false,
  //       startTyping: false
  //     },
  //   },
  //   formIsValid: false
  // }

  nextStep = () => {
    this.setState(prev => ({
      ...prev,
      currentStep: ++prev.currentStep
    }))
  }

  prevStep = () => {
    this.setState(prev => ({
      ...prev,
      currentStep: --prev.currentStep
    }))
  }  

  checkValidity(value, rules) {
    let isValid = true

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /\S+@\S+\.\S+/
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/
      isValid = pattern.test(value) && isValid
    }
    
    return isValid
  }

  inputChangedHandler = (event) => {
    if(event.target) {
      const currentStep = this.state.currentStep
      const fieldName = event.target.getAttribute('name')
      const value = event.target.value

      this.setState(prev => {
        return {
          ...prev,
          steps: {
            ...prev.steps,
            [currentStep]: {
              ...prev.steps[currentStep],
              [fieldName]: {
                ...prev.steps[currentStep][fieldName],
                value
              }
            }
          }
        }
      })
    }
    

    // console.log('stateSteps', stateSteps)
    // console.log('stateName', stateName)
    // console.log('event.target.value', event.target.value)
  }

  handleDataForm = (event) => {
    event.preventDefault()

    // const dataForm = {}
    // for (let formElementIdentifier in this.state.dataFormApp) {
    //   dataForm[formElementIdentifier] = this.state.dataFormApp[formElementIdentifier].value
    // }
    // const data = {
    //   dataFormApp: dataForm
    // }
    // axios.post('/data.json', data)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error))

    // // alert("Your data is submitted successfully")

    const isNextStepAvailable = this.state.currentStep < Math.max(...Object.keys(this.state.steps))

    if(isNextStepAvailable) {
      this.setState(prev => {
        return {
          ...prev,
          currentStep: ++prev.currentStep
        }
      })
    }
  }

  render() {   
      
    // const { step, name, email, phone, experience, employer, link } = this.state
    const {steps, currentStep} = this.state
    // const dataForm = { step, name, email, phone, experience, employer, link }

    const formElementsArray = steps[currentStep] ? Object.entries(steps[currentStep]).map(entry => {
      return {
        name: entry[0],
        ...entry[1]
      }
    }) : []
    // console.log('formElementsArray', formElementsArray)
    // for (let key in this.state.dataFormApp) {
    //   formElementsArray.push({
    //     id: key,
    //     config: this.state.dataFormApp[key]
    //   })
    // }


    return (
      <form className="steps step1" onSubmit={this.handleDataForm} >
                <ul className="circles">
                  {Object.keys(this.state.steps).map(item => (
                    <li className={`circle ${item === this.state.currentStep && 'active1'}`}></li>
                  ))}
                </ul> 
              
                {formElementsArray.map((field, index) => (
                  <Input 
                    key={index}
                    elementType={field.elementType}
                    elementConfig={field.elementConfig}
                    value={field.value}
                    name={field.name}
                    // invalid={!field.valid}
                    // shouldValidate={field.validation}
                    // startTyping={field.startTyping}
                    // changedInput={(event) => this.inputChangedHandler(event, index)}
                    changedInput={this.inputChangedHandler}

                  />
                ))}
                <button 
                  className="steps-button" 
                  disabled={false} 
                  onClick={this.nextStep}>Next</button> 
            </form>
    )
  }
}

export default Application;
