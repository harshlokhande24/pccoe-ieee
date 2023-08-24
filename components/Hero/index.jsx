import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

// React Icons
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 place-items-left md:py-16 md:grid-cols-2" >
        <div data-aos="fade-right">
            <h1 className="text-4xl text-blue font-bold md:text-left md:text-5xl text-center">
                IEEE
            </h1>
            <h2 className="my-4 text-3xl text-dark font-semibold md:text-left md:text-4xl md:my-4 text-center">
                STUDENTS BRANCH
            </h2>
            <div className="text-center font-normal text-md text-dark my-6 mb-8 md:text-left md:text-xl leading-normal">
            <Typewriter
                options={{
                strings: ['we believe in community; together we can learn more and help you grow professionally, technically as well as lets you explore your real potential.'],
                autoStart: true,
                loop: true,
            }}
            />
            </div>
            <Link href="/team">
                <a
                    title="Explore Talks"
                    className="hero-button flex justify-center items-center gap-3 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0">
                    <span className="text-xl md:text-2xl"><BsFillPlayCircleFill /></span>
                    <span>Learn More</span>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Hero;