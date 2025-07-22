import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-x-2 cursor-pointer'>
            <Image src={'/logo.svg'} alt='Logo' width={50} height={50} className='object-cover dark:hidden' />
            <Image src={'/logo-dark.svg'} alt='Logo' width={50} height={50} className='object-cover hidden dark:block' />
            <p className='font-semibold text-xl'>Notion</p>
        </Link>
    )
}

export default Logo