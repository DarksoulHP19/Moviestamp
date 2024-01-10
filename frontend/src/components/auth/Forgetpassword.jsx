import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";
import { commonModalClasses } from "../../utils/theme";

export default function Forgetpassword() {
  return (
    <FormContainer>
      <Container>
        <form className= { commonModalClasses+"w-100  space-y-4"}>
          <Title>Please Enter Your Email</Title>
          <FormInput name="email" placeholder="abc@gmail.com" label="Email"  />
         <Submit val="Send Link" />
         

          <div className="flex justify-between">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/auth/signup">Sign up </CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
}
