import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

const btnList = [
  "All",
  "Live",
  "Trending",
  "Olympics'24",
  "News",
  "A-R Wedding",
  "Comedy",
  "Spirituality",
  "Technology",
  "Sports",
  "Mixes",
  "History"
]

const ButtonList = () => {
  const themeDark = useSelector(store => store?.theme?.themeDark)

  return (
    <div className={`flex justify-center mt-20 w-auto rounded ${themeDark ? 'bg-black' : 'none'}`}>
      {btnList.map((item, index) => <Button index={index} name={item} />)}
    </div>
  )
}

export default ButtonList