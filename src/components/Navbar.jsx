import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLuckyContext } from '../Context/Context'

export default function Navbar() {
  const { isShowingSidebar, setIsShowingSidebar } = useLuckyContext()
  const active_btn = 'text-red-500 nav-btn'
  return (
    <div className=" absolute bottom-0 left-0 right-0 h-16 px-10 text-center z-30 bg-gray-200 opacity-70">
      <ul className=" flex justify-center items-center space-x-9 h-full">
        <li> <NavLink to='/' className={({ isActive }) => isActive ? active_btn : 'nav-btn'}><h1>home</h1></NavLink></li>
        <li>|</li>
        <li><NavLink to='/add' className={({ isActive }) => isActive ? active_btn : 'nav-btn'}><h1>add</h1></NavLink></li>
        <li>|</li>
        <li><NavLink to='/winners' className={({ isActive }) => isActive ? active_btn : 'nav-btn'}><h1>winners</h1></NavLink></li>
        <li>|</li>
        <li><NavLink to='/list' className={({ isActive }) => isActive ? active_btn : 'nav-btn'}><h1>list</h1></NavLink></li>
        <li>|</li>
        <li><button onClick={() => setIsShowingSidebar((pre) => !pre)}>{isShowingSidebar ? 'Hide' : 'Show'}</button></li>
      </ul>

    </div>
  )
}
