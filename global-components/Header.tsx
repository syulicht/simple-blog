import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
    const [sideOpen, setSideOpen] = useState(false);
  return (
    <header className='flex items-center justify-between bg-gray-800 text-white'>
        <div>
            <Image src={'/blog_logo.png'} width={140} height={100} alt='' />
        </div>
        <div onClick={() => setSideOpen(sideOpen ? false : true)} className="cursor-pointer z-20 mr-4">
            {!sideOpen ? <Image src={'/menu_icon.svg'} width={50} height={50} alt='' /> : <Image src={'/close_icon.svg'} width={50} height={50} alt='' />}
        </div>
        <div
            className={`fixed top-[0px] right-0 w-64 h-full bg-gray-900 text-white p-6 z-10 transform ${
                sideOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <nav className="flex flex-col space-y-4">
                <a href="/main" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">About</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Blog</a>
                <a href="/post" className="block py-2 px-4 hover:bg-gray-700 rounded">Post</a>
            </nav>
        </div>
    </header>
  )
}

export default Header