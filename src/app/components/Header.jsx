import React from 'react'
import Link from 'next/link'
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from '../../../src/components/ui/menubar'

const Header = () => {
  return (
    <div>
      <header className="flex flex-row justify-between items-center bg-indigo-800 my-5 mx-5 lg:mx-33 px-2 py-4 rounded-full">
        <Link href="/">
        <h1 className="text-2xl lg:text-3xl font-bold ms-3">Bloggy</h1>
        </Link>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
            </MenubarMenu>       
        </Menubar>
        </header>
        
    </div>
  )
}

export default Header;
