import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import Submit from '../form/Submit'
import FormInput from '../form/FormInput'
import FormContainer from '../form/FormContainer'
import { commonModalClasses } from '../../utils/theme'


export default function Confirmpassword() {
  return (
    <FormContainer>
      <Container>
        <form className= {commonModalClasses+ "w-96 "}>
          <Title> Enter New Password</Title>
          <FormInput name="password" placeholder="password" label="New Password" type ="password" />
          <FormInput type ="password"name="confirmpassword" placeholder="password" label="Confirm Password" />
         <Submit val="Confirm Password" />
        </form>
      </Container>
    </FormContainer>
  );
}
