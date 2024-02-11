import React, { useState } from 'react';
import SideBar from './SideBar';

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="relative z-10 px-4 py-6 flex justify-between items-center bg-blue-500/95">
            <div className="lg:hidden">
                <button onClick={toggleSidebar} className="block text-white focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            <a className="md:ml-10 text-3xl font-bold leading-none" href="#">
                {/* Your Logo SVG */}
            </a>

            <div className="md:mr-10">
                <select
                    name=""
                    id=""
                    className="w-28 bg-inherit border-0 focus:ring-0 focus:outline-none font-semibold text-white appearance-none py-2 px-3 text-lg gap-3 "
                >
                    <option value="English" className="text-black">
                        <span className="">English</span>
                    </option>
                    <option value="Hindi" className="text-black">
                        Hindi
                    </option>
                    <option value="Gujrati" className="text-black">
                        <span className="hover:bg-blue-300 py-2 px-3">Gujrati</span>
                    </option>
                </select>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-50 lg:hidden">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleSidebar} className="text-white focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Close menu</title>
                                <path
                                    fillRule="evenodd"
                                    d="M14.293 5.293a1 1 0 0 0-1.414 0L10 8.586 6.707 5.293a1 1 0 1 0-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 0 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 10l3.293-3.293a1 1 0 0 0 0-1.414z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* Your Sidebar Content */}
                    <SideBar  />

                </div>
            )}
        </nav>
    );
};

export default NavBar;
