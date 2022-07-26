import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, HiOutlineMail } from 'react-icons/fa';

const Navbar = () => {

    const [nav, setUpNav] = useState(false)

    const handleClick = () => setUpNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-700 text-slate-500'>
            <div>

                {/*Menu*/}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>


                {/*Hamburger*/}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>


                {/*Menu for mobile device*/}
                <ul className={!nav ? 'hidden : absolute top-0 left-0 w-full justify-center items-center h-screen bg-slate-700'}
                <li className='py-7 text-3xl'>Home</li>
                <li className='py-7 text-3xl'>About Me</li>
                <li className='py-7 text-3xl'>Services</li>
                <li className='py-7 text-3xl'>Projects</li>
                <li className='py-7 text-3xl'>Contact</li>
            </ul>

            {/*Icons for social apps*/}
            <div className='flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='h-[50px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-350 bg-sky-600'>
                        <a className='flex justify-between items-center w-full text-slate-400'
                            href="/">
                                Linkedin <FaLinkedin size={40} />
                        </a>
                    </li>
                    <li className='h-[50px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-350 bg-stone-900'>
                        <a className='flex justify-between items-center w-full text-slate-400'
                            href="/">
                                Github <FaGithub size={40} />
                        </a>
                        <li className='h-[50px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-350 bg-red-700'>
                        <a className='flex justify-between items-center w-full text-slate-400'
                            href="/">
                                Email <HiOutlineMail size={40} />
                        </a>
                        <li className='h-[50px] w-[150px] flex justify-between items-center ml-[-90px] hover:ml-[-15px] duration-350 bg-rose-300'>
                        <a className='flex justify-between items-center w-full text-slate-400'
                            href="/">
                                Resume < size={40} />
                        </a>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Navbar;