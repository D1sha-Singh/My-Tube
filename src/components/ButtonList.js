import React from 'react'
import Button from './Button'

const btnList = ["All", "Gaming", "News", "Anant Ambani Wedding", "Comedy", "RamMandir"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnList.map((item, index) => <Button index={index} sname={item} />)}
    </div>
  )
}

export default ButtonList