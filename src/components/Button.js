import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-5 m-2 bg-gray-100 rounded-xl'>{props.name}</button>
    </div>
  )
}

export default Button