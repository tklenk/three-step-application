import React, { Component } from 'react'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Summary from './Summary'

class Application extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    phone: '',
    experience: '',
    employer: '',
    link: '',
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
  
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }    

  render() {    
    const { step, name, email, phone, experience, employer, link } = this.state
    const dataForm = { step, name, email, phone, experience, employer, link }

    switch(step) {
      case 1: 
        return (
          <StepOne
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            dataForm={dataForm}
          />
        )
      case 2: 
        return (
          <StepTwo 
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleChange={this.handleChange} 
            dataForm={dataForm} 
          />
        )
      case 3: 
        return (
          <Summary 
            nextStep={this.nextStep} 
            prevStep={this.prevStep} 
            handleChange={this.handleChange} 
            dataForm={dataForm}
          />
        )
      case 4:
        return (
          <h1>Thank You for Submitting an Application!</h1>
        )
      default:
        return
    }
  }
}

export default Application;
