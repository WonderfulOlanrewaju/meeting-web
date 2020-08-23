import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = ()=> {
    return(
        <div className='flex justify-end'>
                <Link className='font-bold text-lg mx-5' to='/host'>HOST MEETING</Link>
                <Link className='font-bold text-lg mx-5' to='/meeting'>JOIN MEETING</Link>
                <Link className='font-bold text-lg mx-5' to = '/help'>HELP</Link>
                <Link className='font-bold text-lg mx-5' to='/account'>MY ACCOUNT</Link>
        </div>
    )
}