import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencilFill } from "react-icons/bs";

export default function Header() {

    return (
        <>
            <div className='flex '>
                <Link to={'/'} className='flex-1 text-4xl m-auto' ><p>Shop</p></Link>
                <Link to={'/products'} className=' font-semibold p-2 py-4'><p>Products</p></Link>
                <Link to={'/carts'} className=' font-semibold p-2 py-4'><p>Carts</p></Link>
                <Link to={'/products/new'} className='font-semibold p-2 text-xl py-4 mt-1'><BsPencilFill /></Link>
                <Link to={'/login'} className='font-semibold p-2 py-4' ><p>Login</p></Link>
            </div>
            <hr />
        </>
    );
}

