import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default function Navbar(props) {
    const changeLocation = async () => {
        if (document.getElementById('locationInput').value === "") {
            props.setLocation("Jind, Haryana");
        }
        else {
            props.setLocation(await document.getElementById('locationInput').value);
        }
        setTimeout(() => {
            document.getElementById('locationInput').value = ""
        }, 1000);
    };
    const sidebarChangeLocation = async () => {
        if (document.getElementById('sidebarLocationInput').value === "") {
            props.setLocation("Jind, Haryana");
        }
        else {
            props.setLocation(await document.getElementById('sidebarLocationInput').value);
        }
        setTimeout(() => {
            document.getElementById('sidebarLocationInput').value = ""
        }, 1000);
    };
    const showLocationBox = () => {
        document.querySelector('.location-container').classList.toggle('show-location-container')
    };
    const showSidebarLocationBox = () => {
        document.querySelector('.sidebar-location-container').classList.toggle('show-sidebar-location-container');
        document.getElementById('dropDownIcon').classList.toggle('rotateDropDownIcon');
    }
    const toggleSidebar = () => {
        document.getElementById('sidebar').classList.add('toggleSidebar');
        document.body.style.overflow = "hidden";
    };
    const closeSidebar = () => {
        document.getElementById('sidebar').classList.remove('toggleSidebar');
        document.getElementById('dropDownIcon').classList.remove('rotateDropDownIcon');
        document.body.style.overflow = "auto";
    }

    document.addEventListener('click', (e) => {
        if (!(e.target.id === "location") && !(e.target.id === "locationContainer") && !(e.target.id === "locationInput") && !(e.target.id === "celUnitLabel") && !(e.target.id === "farUnitLabel") && !(e.target.id === "celUnit") && !(e.target.id === "farUnit")) {
            document.getElementById('locationContainer').classList.remove('show-location-container')
        };
        if (!(e.target.id === "closeContainer") && !(e.target.id === "hamburger") && !(e.target.id === "burgerLine") && !(e.target.id === "sidebar") && !(e.target.id === "sidebarUl") && !(e.target.id === "sidebarLi1") && !(e.target.id === "sidebarLi2") && !(e.target.id === "sidebarLi3") && !(e.target.id === "sidebarlocation") && !(e.target.id === "sidebarLocationContainer") && !(e.target.id === "sidebarLocationInput") && !(e.target.id === "sidebarSubmitChangedLocation") && !(e.target.id === "sidebarUnitCelsius") && !(e.target.id === "sidebarUnitFahrenhiet") && !(e.target.id === "changeUnitContainer") && !(e.target.id === "dropDownIcon") && !(e.target.id === "sidebarDoubleClick")) {
            document.getElementById('sidebar').classList.remove('toggleSidebar');
            document.body.style.overflow = "auto";
            setTimeout(() => {
                document.querySelector('.sidebar-location-container').classList.remove('show-sidebar-location-container');
                document.getElementById('dropDownIcon').classList.remove('rotateDropDownIcon');
            }, 300);
            setTimeout(() => {
                document.getElementById('sidebarLocationInput').value = ""
            }, 1000);
        };
    });
    window.onresize=()=>{
        if (window.innerWidth > 540) {
            document.getElementById('sidebar').classList.remove('toggleSidebar');
            document.body.style.overflow = "auto";
            setTimeout(() => {
                document.querySelector('.sidebar-location-container').classList.remove('show-sidebar-location-container');
                document.getElementById('dropDownIcon').classList.remove('rotateDropDownIcon');
            }, 300);
            setTimeout(() => {
                document.getElementById('sidebarLocationInput').value = ""
            }, 1000);
        }
    }

    return (
        <>
            <nav id="navbar" className="navbar w-full flex justify-between md:justify-start items-center px-[5%] h-16 shadow-lg bg-[#f0f0f5] sticky top-0 z-[998]">
                <NavLink to="/" className="mr-12"><img src="../logo.gif" alt="" className='logo h-12 select-none' /></NavLink>

                <ul className='hidden xsm:flex justify-center items-center space-x-2'>
                    <li className=""><Link to="/" className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black">Home</Link></li>
                    <li className="relative"><button id='location' className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black" onClick={showLocationBox}>Location</button>
                        <div id='locationContainer' className='location-container absolute top-14 -right-[95%] md:right-auto md:-left-[100%] flex flex-col p-[14px] bg-[#f0f0f5] shadow-lg rounded-md'>
                            <div className="flex justify-center items-center bg-[#f0f0f5] w-full">
                                <input type="text" name="location" id="locationInput" className='w-[230px] px-[14px] py-[7px] outline-none bg-[#ebe2e2] rounded-md border-2 border-transparent focus:border-red-300' />
                                <Link to={`${props.unit}/${props.location}`} id="submitChangedLocation" className="ml-2 py-[6px] bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium flex flex-col justify-center items-center text-center w-[100px]" onClick={changeLocation} title="Please double click to change location.">Submit <span className='text-[10px] leading-[1] tracking-tighter'>( Double Click )</span></Link>

                            </div>
                            <div className="mt-[12px] flex justify-between items-center w-full">
                                <Link to={`/celsius/${props.location}`} id="unitCelsius" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium" >Celsius</Link>
                                <Link to={`/fahrenhiet/${props.location}`} id="unitFahrenhiet" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium" >Fahrenhiet</Link>
                            </div>
                        </div>
                    </li>
                    <li className=""><Link to="/about" className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black">About</Link></li>
                </ul>
                <div id='hamburger' className="hamburger cursor-pointer" onClick={toggleSidebar}>
                    <div id='burgerLine' className="burgerLine" onClick={toggleSidebar}></div>
                </div>
                <div id="sidebar" className="sidebar fixed right-0 top-0 flex flex-col justify-start items-center w-[0%] h-[100vh] bg-[#f0f0f5] transition-all duration-500 overflow-hidden">
                    <div id='closeContainer' className="closeContainer h-[5pc] w-full flex justify-end items-center px-6">
                        <img src="../close.svg" alt="" className="close h-10 p-1 rounded-md cursor-pointer active:bg-[#e9dcdc] transition-all duration-200 select-none" onClick={closeSidebar} />
                    </div>
                    <ul id='sidebarUl' className='w-full px-[14px] mt-4 py-2'>
                        <li id='sidebarLi1' className='w-full flex justify-center items-center'><Link to="/" className='w-full px-[12px] py-2 font-medium rounded-md text-[#394248] hover:text-black hover:bg-[#c8ecf1] active:bg-[#c8d5f1] transition-all duration-200'>Home</Link></li>
                        <li id='sidebarLi2' className='w-full flex flex-col justify-start items-center'>
                            <button id='sidebarlocation' className='w-full px-[12px] py-2 font-medium rounded-md text-[#394248] hover:text-black hover:bg-[#c8ecf1] active:bg-[#c8d5f1] transition-all duration-200 flex justify-between items-center' onClick={showSidebarLocationBox}>Location <img src="../down-arrow.png" alt="" id='dropDownIcon' className='h-4 flex justify-center items-center transition-all duration-300'/></button>
                            <div id='sidebarLocationContainer' className='sidebar-location-container w-full flex flex-col bg-[#f0f0f5] rounded-md border- border-blue-400 h-0 overflow-hidden transition-all duration-300'>
                                <div className="flex justify-center items-center bg-[#f0f0f5] w-full">
                                    <input type="text" name="sidebarLocation" id="sidebarLocationInput" className='w-[90%] px-[14px] py-[7px] outline-none bg-[#ebe2e2] rounded-md border-2 border-transparent focus:border-red-300' />
                                    <Link to={`${props.unit}/${props.location}`} id="sidebarSubmitChangedLocation" className="ml-2 py-[6px] bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium flex flex-col justify-center items-center text-center w-[100px] select-none" onClick={sidebarChangeLocation} title="Please double click to change location.">Submit <span id="sidebarDoubleClick" className='text-[10px] leading-[1] tracking-tighter'>( Double Click )</span></Link>

                                </div>
                                <div id='changeUnitContainer' className="mt-[12px] flex justify-between items-center w-full">
                                    <Link to={`/celsius/${props.location}`} id="sidebarUnitCelsius" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200 text-center  px-2 rounded-md font-medium select-none" >Celsius</Link>
                                    <Link to={`/fahrenhiet/${props.location}`} id="sidebarUnitFahrenhiet" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200 text-center px-2 rounded-md font-medium select-none" >Fahrenhiet</Link>
                                </div>
                            </div>
                        </li>
                        <li id='sidebarLi3' className='w-full flex justify-center items-center'><Link to="/about" className='w-full px-[12px] py-2 font-medium rounded-md text-[#394248] hover:text-black hover:bg-[#c8ecf1] active:bg-[#c8d5f1] transition-all duration-200'>About</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
