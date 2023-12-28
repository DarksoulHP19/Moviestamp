import React from 'react'
import { Link } from 'react-router-dom'         
export default function CustomLink({to,children}) {
  return (

      <Link className= "  hover:text-blue-800 dark:text-dark-subtle text-light-subtle  transition" to={to}>{children}</Link>
      
      )
  
}
