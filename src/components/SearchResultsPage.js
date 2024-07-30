import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const SearchResultsPage = ({ source }) => {
  const searchResults = useSelector(store => store?.videos?.videos)
  const themeDark = useSelector(store => store?.theme?.themeDark)

  const getTimeline = (publishTime) => {

  }

  const isSourceWatch = () => source === 'WatchPage'

  return (
    <div className={`p-2 ml-2 shadow-lg ${isSourceWatch() ? 'none' : 'mt-20'} pb-20 h-full w-full ${themeDark ? 'bg-black' : 'none'}`}>
      {searchResults.map(item => {
        const { snippet, id: { videoId = '' } } = item;
        const { thumbnails: { high: { url = '' }, default: { url: urlM = '' } }, title = '', channelTitle = '', publishTime = '', description = '' } = snippet
        const timeline = getTimeline(publishTime);
        return (
          <Link to={"/watch?v=" + videoId} >
            <div className='space-y-2 mb-2 md:h-52 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg'>
              <img
                className='rounded-lg border border-zinc-400'
                alt="thumbnail" src={isSourceWatch() ? urlM : url} />
              <div className='flex flex-col px-2 py-2 md:gap-5'>
                <h4 className={`font-bold ${themeDark ? 'text-white' : 'text-black'}`}>{title}</h4>
                <div className='flex items-center text-xs font-semibold text-gray-500'>
                  <h5>{timeline}</h5>
                  <h3 className='font-medium py-2'>{channelTitle}</h3>
                </div>
                <p className='text-gray-500 text-sm'>{!isSourceWatch() && description}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
