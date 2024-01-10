import React, { useEffect,useRef, useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'
import Submit from '../form/Submit'
// import FormInput from '../form/FormInput'
import FormContainer from '../form/FormContainer'
import { commonModalClasses } from '../../utils/theme'
const OTP_LENGTH = 6;

let currentOTPIndex;

export default function Emailverification() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const inputRef = useRef();
  const focusNextInputField = (index) => {
    setActiveOtpIndex(index + 1);
  }
  const focusPrevInputField = (index) => {
    let nextIndex;
      const diff = index -1;
      nextIndex = diff!==0 ? diff : 0;

    setActiveOtpIndex(nextIndex);
  }

  const handleOtpChange = ({ target }) => {
    const {value} = target;
    const newOtp = [...otp];
    newOtp[currentOTPIndex] = value.substring(value.length - 1, value.length );
    
    if(!value) focusPrevInputField(currentOTPIndex); 
    else focusNextInputField(currentOTPIndex);
    
    setOtp([...newOtp]);
    
  };

  const handleKeyDown = ({key},index) => {
    currentOTPIndex = index;
    if(key === 'Backspace') {
      focusPrevInputField(currentOTPIndex);
    }
  };

  useEffect(() => {
      inputRef.current?.focus();
  },[activeOtpIndex]);
  console.log(inputRef);

  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
         <div  className='space-y-4'>

          <Title className ="text-xl  " >Please Enter the OTP to verify your account</Title>
          <p className='text-center dark:text-dark-subtle text-light-subtle'>OTP has been sent to your email</p>
         </div>
         <div className='flex justify-normal items-center space-x-4' >
          
        {otp.map((_, index) => {
          return(
            <input
            ref={activeOtpIndex === index ? inputRef : null}
            type='number'
            key={index}
            value={otp[index] || ""}
            onChange= {handleOtpChange}
            onKeyDown={(e)=> handleKeyDown(e, index)} 
            className='w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle rounded dark:focus:border-white
            focus:border-primary bg-transparent outline-none text-center dark:text-white text-primary text-semibold text-xl spin-button-none'
            />
            );
          }
          )}
          </div>
          <Submit val="Send Link" />
       
        </form>
      </Container>
    </FormContainer>
  );
}
