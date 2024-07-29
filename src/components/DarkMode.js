import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDark } from '../utils/themeSlice';

const Darkmode = () => {
    const dispatch = useDispatch();
    const themeDark = useSelector(store => store?.theme?.themeDark)
    const setDark = () => {
        dispatch(setThemeDark());
    }

    return (
        <div class="inline-flex items-center">
            <div class="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                <input
                    id="auto-update"
                    type="checkbox"
                    class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-black checked:bg-gray-900 peer-checked:border-gray-100 peer-checked:before:bg-gray-900"
                    defaultChecked = {themeDark}
                    onClick={() => setDark()}
                />
                <label
                    htmlFor="auto-update"
                    class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border bg-white border-black shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                >
                    <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                        data-ripple-dark="true" />
                </label>
            </div>
            <label htmlFor="auto-update" class={`mt-px mb-0 ml-3 font-semibold ${themeDark ? 'text-white' : 'text-black'} cursor-pointer select-none`}>
                Toggle for ghost mode
            </label>
        </div>
    )
}

export default Darkmode