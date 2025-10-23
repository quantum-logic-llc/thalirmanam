import React from 'react'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
import { menuList } from '@/lib/fackdata/menuList'

const DesktopMenu = () => {
    return (
        <nav className="xl:block hidden">
            <ul className="flex items-center space-x-8">
                {
                    menuList.map(({ dropDownMenu, id, label, path }) => {
                        return (
                            <li key={id} className="relative group">
                                <Link 
                                    href={path} 
                                    className="font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-2 flex items-center gap-1"
                                >
                                    {label} 
                                    {dropDownMenu && dropDownMenu.length > 0 && <FaAngleDown className='text-xs ml-1' />}
                                </Link>
                                {
                                    dropDownMenu && dropDownMenu.length > 0 &&
                                    <ul className="absolute top-full left-0 z-20 bg-white shadow-lg rounded-lg border border-gray-200 min-w-64 py-2 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                        {dropDownMenu.map(({ id, label, path }) => {
                                            return (
                                                <li key={id}>
                                                    <Link 
                                                        href={path} 
                                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default DesktopMenu