import React from "react";
import Link from "next/link";
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "../../../src/components/ui/menubar";

const Header = () => {
  return (
    <div>
      <header className="flex flex-row justify-between items-center bg-indigo-800 my-5 mx-5 lg:mx-33 px-2 py-4 rounded-full">
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl font-bold ms-3">Bloggy</h1>
        </Link>
        <Menubar className={"text-white bg-[#0000] border-0 shadow-none hidden lg:flex"}>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/">Home</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link href="/categories">Categories</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/dashboard">Overview</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/dashboard/article/manage">Create Article</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/dashboard/article/all">Articles</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/dashboard/">Edit profile</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>
    </div>
  );
};

export default Header;
