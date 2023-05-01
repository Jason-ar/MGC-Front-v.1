import React from 'react';
import { FooterCard } from '../Components/Global/Footer';
import { Header } from '../Components/Global/Header';
//let obj = { a: '1' }
//expect(obj).toEqual({ a: '1' })';

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Header />
            {children}
            <FooterCard />
        </div>
    );
}

export {Layout};