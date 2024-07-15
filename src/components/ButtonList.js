import React from 'react'
import Button from './Button'

const btnList = ["All", "Gaming", "News", "Anant Ambani Wedding", "Comedy", "RamMandir"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnList.map((item, key) => <Button name={item} />)}
    </div>
  )
}

export default ButtonList