import React from 'react'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-full flex items-center justify-between border-b-[1px] p-2 border-black/10'>
        <Link to={"/"}>
          <div className='flex items-center space-x-3'>
            <img src='logo.png' alt='' className='h-16'/>
            <h1 className='text-2xl'>CodeBook</h1>
          </div>
        </Link>
        <SideNav />
    </div>
  )
}
