import React from 'react'
import HeroButton from './heroButton'
import young from "../../../public/assets/young.png"

const Hero = () => {
    return (
        <section className={"relative overflow-hidden flex justify-center sm:m-0"}>
            <div
                className={"w-full h-[554px] bg-gray-50 bg-hero flex items-center sm:bg-cover sm:bg-revert sm:bg-no-repeat bg-cover bg-center"} style={{ backgroundImage: `url(${young})` }}>
                <div className='flex flex-col justify-center gap-4 md:p-5 sm:p-[10%,30px] p-[50px,30px]'>
                    <h1 className="md:text-4xl md:m-[32px,0] sm:text-3xl sm:m-[24px,0px] md:whitespace-normal w-[60%] text-2xl m-[8px,0px]">Create a Resume</h1>
                    <p className="text-xl md:text-lg sm:text-lg line-clamp-3 max-w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure adipisci cum aspernatur qui provident quidem accusantium, in amet, dolor cupiditate? Molestiae modi doloremque animi, deleniti est quod laudantium et, sint eligendi quisquam at praesentium!</p>
                    <HeroButton/>
                </div>
            </div>
    </section>
    )
}

export default Hero