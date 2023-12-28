import React from 'react'

export default function FormInput({name,placeholder,label,...rest}) {
  return (
    <div className='flex flex-col-reverse'>
    <input  name={name} id ={name} className=' bg-transparent rounded  border-2  dark:border-dark-subtle
    border-light-subtle w-full text-lg outline-nonedar dark:focus:border-white  focus:border-primary p-1 dark: text-purple-300 peer transition ' placeholder={placeholder} {...rest} />
    <label htmlFor={name}  className='font-semibold  dark:text-dark-subtle text-light-subtle
    peer-focus:text-cyan-500   self-start '>{label}</label>
    </div>
  )
}
