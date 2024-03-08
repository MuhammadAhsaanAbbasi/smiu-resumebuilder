import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Wrapper from '../wrapper/wrapper'
import logo from "../../../public/assets/logo.png"
import { Button } from '../ui/button'
const Header = () => {
  return (
    <section>
      <nav className="bg-[#ffffff9d] backdrop-blur-xl sticky top-0 z-10">
        <Wrapper>
          <div className="flex justify-between py-4 px-3 items-center gap-x-4 md:gap-x-0">
            <div>
              <Link href={"/"}>
                <Image src={logo} alt="" height={150} width={150} />
              </Link>
            </div>
            <ul
              className="flex gap-x-8 font-medium px-6 items-center">
              <Link href={"/"}><li>Home</li></Link>
              <Link href={"/resume"}><Button className='text-white'>Create Resume</Button></Link>
            </ul>
          </div>
        </Wrapper>
      </nav>
    </section>
  )
}

export default Header