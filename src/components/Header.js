import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULT_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice'
import { setVideos } from '../utils/videosSlice'
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from './DarkMode';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFromSuggestions, setSelectedFromSuggestions] = useState(false)
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const themeDark = useSelector(store => store?.theme?.themeDark)

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

    const getSearchResults = useCallback(async () => {
        const data = await fetch(YOUTUBE_SEARCH_RESULT_API + searchQuery);
        const json = await data.json();
        dispatch(setVideos(json?.items ?? []));
        navigate(`results/?search_query=${searchQuery}`);
        setSelectedFromSuggestions(false)
    }, [dispatch, navigate, searchQuery])



    const handleClick = (item) => {
        setSearchQuery(item);
        setSelectedFromSuggestions(true)
    }

    useEffect(() => {
        selectedFromSuggestions === true && getSearchResults();
    }, [selectedFromSuggestions, getSearchResults])

    return (
        <div className={`grid grid-flow-col p-2 fixed w-full shadow-lg ${themeDark ? 'bg-black shadow-lg shadow-red-500' : 'bg-white shadow-slate-600'}`}>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-12 cursor-pointer"
                    alt="menu-tag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVR4nO3Wy2rCQBgF4DyEIyoqKoqKigZFZeYFat8fHI3XxEu9tGrM/hRE6CqxdNNBzwf//hz4F8eyiIiInkUg5buvlHdVCo/OlxKXfh/nXg+nbhdfnQ4+220cbRuHVgv7ZhO7RgMf9Tq2tRo21SrWlQpW5TJWpRK8YhFuoYBlPo9FLod5NotZJoNpOo1JKgUnmcQ4kcAoHocW4nZDITwdiw1CC5gcXv+UcEMLmB5e3+/PBUwIr6MKRL2QKeGHUS8UKDXwpXRNDq+FeAstQET0vwJuIZtbyOEWUtxC4BYiohcVcAvZ3EIOt5DiFgK3EBERkfU733gufug23WaYAAAAAElFTkSuQmCC" />
                <Link to="/">
                    <img
                        className="h-12 mx-2"
                        alt='my-tube-logo' src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-picture-2.png"/>
                </Link>
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
                    <div className='absolute bg-white py-2 px-5 w-[28rem] shadow-lg rounded-md border border-gray-500'>
                        <ul>
                            {suggestions.map((item, idx) =>
                            (
                                <li
                                    key={idx}
                                    className="py-2 shadow-sm bg-white hover:bg-gray-200 cursor-pointer"
                                    onMouseDown={() => handleClick(item)}
                                >
                                    🔍{item}
                                </li>)
                            )}

                        </ul>
                    </div>
                }
            </div>

            <div className='col-span-1 grid grid-flow-col'>
                <DarkMode />
                <img
                    className='h-8'
                    alt="user-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1klEQVR4nO2ZT2hUVxTGf22SAWMI1UaCGsTS7qT0jxgKDUhF0EWpmJIQrEK70IWQjVl00WyLWFO7EEJEK1FRYzHQLsSkTdqaZO5NoXTloimGxvT/HxFUkoYJuXIyd8yZl3Rmknl5M4F88DGP++67831vzjnvvDuwilWsImy8AVwFfgYmgEfAj8AVoBGIUcSo8KJdBt4B6ilSxIA/sxhI8STwNEWIrcC7wItAObAWeBloBf4OmPiIFYZK4HrAxH5WGCRsugM5EaNYYeBVA+0GfrIwKfwS7pSnJ3sDxQYDawycNzBjwQV5WIVRSbLsRo4XgBb/OU+8hfhCwlO8qAxUw4RcE7WBUS9APtNgoTOTeGG/MlCeHPs0agMPVQzLA2wWcdjxf2Gj2acMrAUn1wzD9igNjCgDL6UGLZzLJl54QRnY4scMnInSgPQ2KRGtysBYLgZ0Eu+dMyD9U2SQxiwlQp6wlZ9BiYXpbOK/AveMMvDh3LmErBGVgZhKZGH3ESjLZiAObqcSXwNusEAG8F2lbgu6e+HXTHdeiwfcifQ5dykApKvUJXHysE/Srz07fczrsBEemm/ybKF6mzQTufCgDyc7l8BSRl+jgNjvG7OMwmvmh43zvEwRQBK7oRS6NsLkGnDCreD2+GqjElbf/e+/UQ/DooAIMtCVraQauFp04jUs1Fm4YOE3JVyOOw28zkrCbYgJC61jxWID0AH8AkwvsmxK53ogsJ687MfVHFlznGRD91zY4ncBfy221gf4bWDN3RnmPvDnQ7vz+YrP5RdwAcr+UlUYBjrUomPATpan4SoB6vyWZOr72sNYeFwtKOKj2Ft1nqE0d1NqwTJ9Ig6vWLhl4b9cXmJy4YAKo1KYGUru6uWFf5SBzalBabwMTIUl3Hp+oQxI9yrfYaA2HwN9ysCR1KCFH8IWb8G9rwzsUL1SPgaaAzG5/jt4djnE9yT3iJ4YaEnvmdbnsyH7hzJhP4DnwxbfB26bEl/l945Ubkg5XzLeBBLKxOhpeBSW+HZwm5T4EnBt6XPuuxD+S3gPmNEPm1pwp8ANLUG0XPOxX0Ov+RS41mV82Xk7UJVmWQFuF7hmcJ+Auwau15fEAX98zZ9r9nPlGgKUqnN8vviESf5ZEhqqgUuBkMqLpX5z68YCv5RJFpFlwRb5i6gC7i1V+CZw74D7fOEwS1g4RhQ4Co1H4fd6cNvBbQZXCa7Ms9KPybl6Xx67MuSHgdv5PrwWDakSw7DPQL+/e4tN7ISFPgtvhVFx8sIgrLPQZKDNQo+BEQP/+rZgyh+PWLjp5zTJNQUVvQqWhsdY6PuV0BeKpAAAAABJRU5ErkJggg==" />
            </div>
        </div>
    )
}

export default Header;