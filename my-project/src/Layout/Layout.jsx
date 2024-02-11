import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='md:h-1/12'>
                <NavBar toggleSidebar={toggleSidebar} />
            </div>
            <div className='flex flex-col lg:flex-row md:h-11/12'>
                <div className='hidden lg:w-1/6 lg:block'>
                    <SideBar isMobileOpen={isSidebarOpen} />
                </div>
                <div className='lg:w-5/6'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
