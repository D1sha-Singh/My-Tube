import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const themeDark = useSelector(store => store?.theme?.themeDark)
    
    if (!isMenuOpen) return null;
    
    return (
        <div className={`w-52 pt-20 px-5 hidden md:block ${themeDark ? 'bg-black' : 'none'}`}>
            <ul className={`${themeDark ? 'text-white' : 'none'} mx-2`}>
                <li><Link to={"/"}>Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul className={`${themeDark ? 'text-white' : 'none'} mx-2`}>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <br className='border border-gray-500 '/>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul className={`${themeDark ? 'text-white' : 'none'} mx-2`}>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar