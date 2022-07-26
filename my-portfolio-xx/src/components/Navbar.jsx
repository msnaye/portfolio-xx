import React from 'react'

const Navbar = () => {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue text-slate-500'> Mayra Ibarra</div>
    {/*Menu*/}
    <div className='hidden'>
       <ul className='flex'>
           <li>Home</li>
           <li>About</li>
           <li>Services</li>
           <li>Projects</li>
           <li>Contact</li>
       </ul>
    </div>

        {/*Hamburger*/}
        <div className='hidden'>
            <FaBars/>
        </div>
        {/*Menu for mobile device*/}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div></div>
        {/*Icons for social apps*/}
    )
}

export default Navbar