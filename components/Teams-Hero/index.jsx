import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
//JSON Data
import Team from "./data/teams.json"
import Teams from './Teams';


const TalksHero = () => {
    return (
        <div>
            <div className="max-w-7xl w-100 m-auto px-4 grid grid-cols-1 gap-10 py-10 place-items-center md:grid-cols-2 md:py-16 md:mb-14">
                <div className="w-100">
                    <h1 className="text-center text-4xl text-pink font-bold md:text-left md:text-5xl">
                        Meet our Team
                    </h1>
                    <h2 className="my-4 text-3xl text-dark font-semibold text-center md:text-4xl md:text-left leading-normal">
                        Experienced | Professional
                    </h2>
                    <div className="mb-6 text-md font-medium text-gray text-center md:text-left leading-8">
                    <Typewriter
                            options={{
                                strings: ['The main aim of ITSA is to foster the students in overall development by reinforcing their technical, professional, and social groups. Consequently, the goal is to create a professional environment for students to plan, organize and execute various activities seeking student development.'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                    </div>
                </div>

                <div className="w-100">
                    <img src="/content.svg" alt="Content" />
                </div>
            </div>

            <div className="content bg-light-purple py-20 md:py-36">
                <div className="max-w-7xl w-100 m-auto px-4">
                    <h2 className="mb-10 text-white text-2xl font-semibold text-center md:mb-20 md:text-4xl">
                        Meet The ITSA Team
                    </h2>
                    <div className="grid place-items-center grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2"  >
                        {
                            Team.map((data, index) => (
                                <>
                                  <Teams title={data.name} members={data.members} key={index}/>
                                  </>
                            )
                            )
                        }
                </div> </div>
            </div>
        </div>
    )
}

export default TalksHero;
