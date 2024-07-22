import React from 'react'
import Button from './Button'

const btnList = ["All", "Live", "Trending", "News", "Anant Ambani Wedding", "Comedy", "RamMandir"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnList.map((item, index) => <Button index={index} name={item} />)}
    </div>
  )
}

export default ButtonList