import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menu, close } from 'ionicons/icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#EDBFB7] shadow-xl h-[70px]">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className='  gap-3 flex ' >
                    <div>
                        <img
                            className="w-16 pt-2 cursor-pointer"
                            src="./images/logoo.png"
                            alt="Logo"
                        />
                    </div>
                    <div className='pt-2 ' >
                        <h1><span className='text-red-600 text-[20px] font-medium' >Dr. Viral,s</span> <br /> <span className='text-blue-500 text-[18px]' > Multispeciality Dental Clinic</span> </h1>
                    </div>
                </div>
                 

                {/* Nav Links */}
                <div
                    className={`nav-links duration-500 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'
                        } md:static absolute  md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex text-2xl font-medium md:flex-row flex-col md:items-center md:gap-[3vw] gap-">
                    

                       <Link to='/' >
                       <li>
                            <a className="hover:text-gray-500" href="#">
                                Home
                            </a>
                
                        </li>
                       </Link>

                        <Link  to='/services' >
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Services
                            </a>
                            
                        </li>
                        </Link>

                       <Link  to='/page' >
                       <li>
                            <a className="hover:text-gray-500" href="#">
                                Pages
                            </a>
                        </li>
                       </Link>

                        <Link  to='/aboutus' >
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                About Us
                            </a>
                        </li>
                        </Link>
                        
                        <Link  to='/contact' >
                        <li>
                            <a className="hover:text-gray-500" href="#">
                                Contact
                            </a>
                        </li>
                        </Link>

                    </ul>
                </div>

                {/* Sign In Button and Menu Icon */}
                <div className="flex items-center gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                        Sign in
                    </button>

                    {/* Mobile Menu Toggle Icon */}
                    <IonIcon
                        icon={menuOpen ? close : menu}
                        className="text-3xl cursor-pointer md:hidden"
                        onClick={onToggleMenu}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
