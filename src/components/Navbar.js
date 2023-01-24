import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    const changeLocation = async () => {
        if (document.getElementById('locationInput').value === "") {
            props.setLocation("Delhi, India");
        }
        else {
            props.setLocation(await document.getElementById('locationInput').value);
        }
    };
    const showLocationBox = () => {
        document.querySelector('.location-container').classList.toggle('show-location-container')
    };
    document.addEventListener('click', (e) => {
        if (!(e.target.id === "location") && !(e.target.id === "locationContainer") && !(e.target.id === "locationInput") && !(e.target.id === "celUnitLabel") && !(e.target.id === "farUnitLabel") && !(e.target.id === "celUnit") && !(e.target.id === "farUnit")) {
            document.getElementById('locationContainer').classList.remove('show-location-container')
        }
    });
    

    return (
        <>
            <nav id="navbar" className="navbar w-full flex justify-start items-center px-[5%] h-16 shadow-lg bg-[#f0f0f5] sticky top-0 z-[998]">
                <NavLink to="/" className="mr-12"><img src="../logo.gif" alt="" className='logo h-12 select-none' /></NavLink>

                <ul className='hidden xsm:flex justify-center items-center space-x-2'>
                    <li className=""><Link to="/" className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black">Home</Link></li>
                    <li className="relative"><button id='location' className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black" onClick={showLocationBox}>Location</button>
                        <div id='locationContainer' className='location-container absolute top-14 -left-[100%] flex flex-col p-[14px] bg-[#f0f0f5] shadow-lg rounded-md'>
                            <div className="flex justify-center items-center bg-[#f0f0f5] w-full">
                                <input type="text" name="location" id="locationInput" className='w-[230px] px-[14px] py-[7px] outline-none bg-[#ebe2e2] rounded-md border-2 border-transparent focus:border-red-300'  />
                                <Link to={`${props.unit}/${props.location}`} id="submitChangedLocation" className="ml-2 py-[6px] bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium flex flex-col justify-center items-center text-center w-[100px]" onClick={changeLocation} title="Please double click to change location.">Submit <span className='text-[10px] leading-[1] tracking-tighter'>( Double Click )</span></Link>

                            </div>
                            <div className="mt-[12px] flex justify-between items-center w-full">
                                <Link to={`/celsius/${props.location}`} id="submitChangedLocation" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium" >Celsius</Link>
                                <Link to={`/fahrenhiet/${props.location}`} id="submitChangedLocation" className="w-[48%] py-2 bg-blue-200 hover:bg-blue-300 transition-all duration-200  px-2 rounded-md font-medium" >Fahrenhiet</Link>
                            </div>
                        </div>
                    </li>
                    <li className=""><Link to="/about" className="px-[12px] py-1 rounded-md flex justify-center items-center font-medium hover:scale-105 transition-all duration-150 text-[#555a5d] hover:text-black">About</Link></li>
                </ul>

            </nav>
        </>
    )
}
