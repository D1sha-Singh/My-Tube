import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULT_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice'
import { setVideos } from '../utils/videosSlice'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getSearchSuggetions = useCallback(async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }, [setSuggestions, dispatch, searchQuery])

    useEffect(() => {
        // debouncing with caching
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery])
            else getSearchSuggetions()
        }, 200);
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery, searchCache, getSearchSuggetions])

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCH_RESULT_API + searchQuery);
        const json = await data.json();
        console.log('disha json ', json?.items)
        dispatch(setVideos(json?.items ?? []));
        navigate(`results/?search_query=${searchQuery}`);
    }

    const handleClick = (item) => {
        setSearchQuery((item) => getSearchResults(item));
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt="menu-tag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/480px-Hamburger_icon.svg.png" />
                <a href="/">
                    <img
                        className='h-8 mx-2'
                        alt='my-tube-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s" />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input
                        className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        type='text' />
                    <button
                        className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100" onClick={getSearchResults}>🔍</button>
                </div>
                {showSuggestions &&
                    <div className='absolute bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-500'>
                        <ul>
                            {suggestions.map((item, idx) =>
                            (
                                <li
                                    key={idx}
                                    className="py-2 shadow-sm bg-white hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleClick(item)}
                                >
                                    🔍{item}
                                </li>)
                            )}

                        </ul>
                    </div>
                }
            </div>
            <div className='col-span-1'>
                <img
                    className='h-8'
                    alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header;