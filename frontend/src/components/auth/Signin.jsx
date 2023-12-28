import React  from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'

 
export default function Signin() {


  return (
    <FormContainer>
        <Container>
            <form className={commonModalClasses + 'w-72 space-y-5'}>
                <Title>Sign In</Title>
                <FormInput name='email' placeholder='abc@gmail.com' label='Email' />
                <FormInput type="password"name='password' placeholder='Password' label='Password' />
                <Submit val="Sign in" />

                <div className="flex justify-between">
                  <CustomLink to="/auth/forget-password">Forget Password </CustomLink>
                  <CustomLink  to="/auth/signup">Sign up </CustomLink>
                  
                </div>
            </form>


        </Container>

    </FormContainer>
  )
}
