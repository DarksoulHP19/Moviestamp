import React from 'react'

export default function Submit({val}) {
  return (
    <input type='submit' className='w-full rounded dark:bg-white bg-secondary 
    dark:text-secondary text-white 
    hover:bg-opacity-90 transition font-semibold text-lg
    p-1 cursor-pointer' value={val}/>
  )
}
