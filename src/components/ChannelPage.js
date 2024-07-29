import React from 'react'
import { useSelector } from 'react-redux'

const ChannelPage = () => {
    const channelData = useSelector(store => store?.channel?.channelData);
    console.log('disha chhh', channelData);
  return (
    <div>ChannelPage</div>
  )
}

export default ChannelPage