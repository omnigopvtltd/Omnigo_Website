import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-full bg-[#EBF5FF] border-b border-[#DCEBFF]">
     <header className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center">
        <img src="./images/omnigo-logo.png" alt="Omnigo Logo" class="w-auto h-14 p-2"/>
        
        </Link>
        
        {/* <a href="#" className="text-2xl font-black tracking-tight text-[#111827] flex items-center gap-2 group">
          <span className="w-3 h-3 rounded-full bg-[#0365D4] group-hover:scale-125 transition-transform duration-300"></span>
          Soonage
        </a> */}

        {/* Navigation Links Ex1 - Ex10 */}
        {/* <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          {['Ex 1', 'Ex 2', 'Ex 3', 'Ex 4', 'Ex 5', 'Ex 6', 'Ex 7', 'Ex 8', 'Ex 9', 'Ex 10'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={
                item === 'Ex 9'
                  ? 'text-[#0365D4] font-bold border-b-2 border-[#0365D4] pb-0.5'
                  : 'text-gray-500 hover:text-[#0365D4] transition-colors'
              }
            >
              {item}
            </a>
          ))}
        </nav> */}

        <div>
          <a
            href="#install"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-[#111827] text-[#111827] font-bold text-sm hover:bg-[#111827] hover:text-white transition-all shadow-sm active:scale-95"
          >
            Install Our App
          </a>
        </div>
      </header>
      </div>
  )
}

export default Header
