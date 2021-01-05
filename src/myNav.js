import React from 'react';
import dollarLogo from'./dollar.svg';
import bitcoinLogo from'./bitcoin.svg';
import { Link } from 'react-router-dom'



class myNav extends React.Component {


    render(){


        return(


    <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3 px-30">

            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-2 md:order-2" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><Link to="/about" className="inline-block no-underline hover:text-black hover:underline py-2 px-4">About</Link></li>
                        <li><Link to="/resources" className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Resources</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="order-1 md:order-1">
                <Link to="/" className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                <img className="px-2" src={dollarLogo} width="50px"/>
                
                    FIAT 2 SATS
                <img className="px-2" src={bitcoinLogo} width="50px"/>
                </Link>
            </div>

        </div>
    </nav>




        )
    }
}


export default myNav;
    
