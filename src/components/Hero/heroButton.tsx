"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const HeroButton = () => {
    const router = useRouter()
    const setCategory = () => {
        router.push('/resume')
    }
    return <Button onClick={()=>setCategory()} className='w-28'>Explore Now</Button>
}

export default HeroButton