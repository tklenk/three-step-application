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
  
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }    
  
  render() {    
    const { step, name, email, phone, experience, employer, link } = this.state

    switch(step) {
      case 1: 
        return (
          <StepOne 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            name={name}
            email={email}
            phone={phone}
          />
        )
      case 2: 
        return (
          <StepTwo 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            experience={experience}
            employer={employer}
            link={link} 
          />
        )
      case 3: 
        return (
          <Summary 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            name={name}
            email={email}
            phone={phone}
            experience={experience}
            employer={employer}
            link={link} 
          />
        )
      default:
    }
  }
}

export default Application;
