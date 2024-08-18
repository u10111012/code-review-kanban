"use client"

import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'


export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>

        <Button onClick={() => signOut()}>Sign out</Button>
         <Button onClick={() => signIn()}>Sign in</Button>

        <ThemeToggle />
      </nav>
    </header>
  )
}
