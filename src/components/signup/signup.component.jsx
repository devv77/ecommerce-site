import React from 'react';

import FormInput from '../forminput/forminput.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../firebase/firebase.utils'

import './signup.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super ();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} =this.state;

        if(password !== confirmPassword){
            alert("Passwords dont match")
            return;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''  
            })

        } catch (error) {
            console.error(error);
        }
    };

    handleChange=event => {
        const {name,value} =event.target;

        this.setState({[name]: value})
    }


    render(){
        return(
            <div className='signup'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    name='displayName'
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required>
                    </FormInput>
                    <FormInput 
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    label='Email'
                    required>
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    label='Password'
                    required>
                    </FormInput>
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm password'
                    required>
                    </FormInput>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;