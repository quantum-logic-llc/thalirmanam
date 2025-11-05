import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

const PageTitle = ({ pageName, breadcrumbLink, breadcrumbCurrent, className }) => {
    return (
        <div className={className}>
            <div className="relative lg:py-20 py-12 overflow-hidden" style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
            }}>
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Page Title */}
                        <h1 className="xl:text-[64px] lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-gray-900 mb-4 max-w-4xl">
                            {pageName}
                        </h1>

                        {/* Decorative divider */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-500 to-blue-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent via-blue-500 to-blue-500 rounded-full"></div>
                        </div>

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb">
                            <ul className="flex items-center justify-center gap-3 lg:text-lg text-base">
                                <li>
                                    <Link
                                        href="/"
                                        className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="text-gray-400">
                                    <FaAngleRight className="text-sm" />
                                </li>
                                <li>
                                    <span className="font-semibold text-blue-600">
                                        {breadcrumbCurrent}
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle