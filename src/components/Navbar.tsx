import React from 'react'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './ThemeToggleButton'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex justify-between p-10">
            <Link href={'/'}>
                <h1 className='text-3xl py-5 font-bold'>Seccion crud</h1>
            </Link>

            <div className='flex gap-x-2 items-center '>
                <Link href={'/new'} className={buttonVariants({ variant: "secondary" })}> Create Task</Link>
                <ModeToggle />
            </div >
        </nav >
    )
}

export default Navbar