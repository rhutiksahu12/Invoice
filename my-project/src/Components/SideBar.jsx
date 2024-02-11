import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaFile } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { MdOutlineInventory } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosCloudUpload } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";



const sideBarData = [
    {
        text: "Invoices",
        icon: <FaFile />
    },
    {
        text: "Customer",
        icon: <FaRegUser />
    },
    {
        text: "My Business",
        icon: <IoSettingsOutline />
    },
    {
        text: "Invoice Journal",
        icon: <IoBookOutline />
    },
    {
        text: "Price List",
        icon: <IoPricetagOutline />
    },
    {
        text: "Multiple Invoicing",
        icon: <IoDocumentTextOutline />
    },
    {
        text: "Unpaid Invoices",
        icon: <TiDelete />
    },
    {
        text: "Offer",
        icon: <BiSolidOffer />
    },
    {
        text: "Inventory Control",
        icon: <MdOutlineInventory />
    },
    {
        text: "Member Invoicing",
        icon: <BiSolidOffer />
    },
    {
        text: "Import / Export",
        icon: <IoIosCloudUpload />
    },
    {
        text: "Logout",
        icon: <IoIosLogOut />
    },
]

const SideBar = ({isSidebarOpen}) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <aside className={`h-full w-full shadow-md md:px-2 ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className='w-full flex justify-center md:py-2'>
                <span className='text-lg md:text-xl text-center'>Menu</span>
            </div>
            <hr className='bg-blue-600 h-0.5 md:h-[2px]' />
            <button className="md:hidden absolute top-2 right-2" onClick={toggleMobileMenu}>
                {isMobileOpen ? 'Close' : 'Open'}
            </button>
            <ul className={`grid justify-center ${isMobileOpen ? 'mobile-open' : ''}`}>
                {sideBarData.map((item, index) => (
                    <li key={index} className='md:m-2'>
                        <div className='flex items-center gap-2 md:gap-3 text-base md:text-lg p-1 md:hover:bg-gray-300 rounded-xl'>
                            <div>{item.icon}</div>
                            <span>{item.text}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;