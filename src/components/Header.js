import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
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
                <input
                    className='w-1/2 border border-gray-400 p-2 rounded-l-full'
                    type='text' />
                <butto
                    className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">Search</butto>
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