import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    
    <nav className="flex justify-between m-[20px] border-black">
      <img src="#" alt="TripMate Logo"  />
      <ul className="flex">
        <li>Home</li>
        <li>New Adventure</li>
        <li>Profile</li>
        <li>Chats</li>
        <li>Notifications</li>
        <li>About</li>
      </ul>
      <div className="flex">
        <img src="#" alt="Profile photo" />
        <Menu>

        <Menu.Item key="/api/login">
          <Link href="/api/login">
            Login
          </Link>
        </Menu.Item>
        <Menu.Item key="/api/logout">
          <Link href="/api/logout">
            Logout
          </Link>
        </Menu.Item>
        </Menu>
      </div>
    </nav>
  ) 
}

