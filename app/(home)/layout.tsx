import { ChildProps } from '@/types'
import React from 'react'
import { Navbar } from './_components/navbar'

const HomeLayout = ({children}:ChildProps) => {
  return (
    <div>
        <Navbar />
        <main className='h-full pt-40'>
        {children}
        </main>
    </div>
  )
}

export default HomeLayout