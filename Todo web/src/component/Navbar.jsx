import React from 'react'

const Navbar = () => {
  return (
    
      <nav className='flex bg-indigo-800 justify-between text-white p-4 px-20'>
        <div><span className='font-bold text-xl cursor-pointer'>iTask</span></div>
       <ul className="flex gap-10">
        <a href="/"><li>Your task</li></a>
       </ul>
      </nav>
    
  )
}

export default Navbar
