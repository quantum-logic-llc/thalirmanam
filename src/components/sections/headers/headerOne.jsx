'use client'
import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";
import TopHeader from './topHeader'
import SearchForm from './searchForm'
import Logo from '@/components/ui/logo'
import StickyHeader from '@/components/ui/stickyHeader'

const HeaderOne = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    return (
        <StickyHeader>
            <header id="header" className="sticky top-0 transition-[top] duration-300 z-50 w-full">
                <div id="header-container">
                    <TopHeader />
                    <div className="[.header-pinned_&]:shadow-lg border-b border-gray-100 transition-all duration-300" style={{ backgroundColor: '#eff6ff' }}>
                        <div className="container">
                            <div className="flex justify-between items-center h-20">
                                <Logo width={200} height={100} />
                                
                                <div className="flex items-center space-x-8">
                                    <DesktopMenu />
                                    
                                    <div className="flex items-center space-x-4">
                                        <button
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                            onClick={() => setIsSearchActive(true)}
                                        >
                                            <FaMagnifyingGlass className='text-lg text-gray-600' />
                                        </button>

                                        <Button asChild variant="default" size="sm" className="hidden sm:flex bg-orange-500 hover:bg-orange-600 text-white">
                                            <Link href="mailto:thalirmanam5@gmail.com" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                                                Book An Appointment <FaArrowRight className="text-sm" />
                                            </Link>
                                        </Button>

                                        <button
                                            className="xl:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 hover:bg-gray-100 rounded transition-colors duration-200"
                                            onClick={() => setIsMobileMenuActive(true)}
                                        >
                                            <span className="block h-0.5 w-5 bg-gray-600 transition-all duration-300"></span>
                                            <span className="block h-0.5 w-5 bg-gray-600 transition-all duration-300"></span>
                                            <span className="block h-0.5 w-5 bg-gray-600 transition-all duration-300"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <MobileMenu isMobleMenuActive={isMobileMenuActive} setIsMobleMenuActive={setIsMobileMenuActive} />
                    <SearchForm isSerchActive={isSearchActive} setIsSerchActive={setIsSearchActive} />
                </div>
            </header>
        </StickyHeader>
    )
}

export default HeaderOne