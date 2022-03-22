import React from 'react';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'
import './signin.styles.scss';

const SignInPage = () => (
<div className="signin">
    <SignIn />
    <SignUp />
</div>)

export default SignInPage;