"use client";

import React from 'react';
import Header from '@/core/Navbar/Searchbar';
import Navbar from '@/core/Navbar';

export default function HomePage(){
    return (
        <div className='w-full flex flex-col mx-auto justify-start align-top bg-white min-h-screen text-black'>
            <Navbar/>
        </div>
    );
}