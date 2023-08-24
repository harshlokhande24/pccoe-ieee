import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// React Icons
import { BsGlobe, BsHeadphones, BsLinkedin, BsPlus, BsTwitter } from 'react-icons/bs';
import { RiSignalWifiErrorLine } from 'react-icons/ri';

//JSON Data
import faculty from "./data/faculty.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'




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
                    <p className="mb-6 text-md font-medium text-gray text-center md:text-left leading-8">
                    The main aim of ITSA is to foster the students in overall development by reinforcing their technical, professional, and social groups. Consequently, the goal is to create a professional environment for students to plan, organize and execute various activities seeking student development.
                    </p>
                </div>

                <div className="w-100">
                    <img src="/content.svg" alt="Content" />
                </div>
            </div>

            <div className="content bg-light-purple py-20 md:py-36">
                <div className="max-w-7xl w-100 m-auto px-4">
                    <h2 className="mb-10 text-white text-2xl font-semibold text-center md:mb-20 md:text-4xl">
                        Mentors 
                    </h2>
                    <div className="grid place-items-center grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
                        {
                            faculty.map((member, index) =>
                                <div 
                                    key={index} 
                                    className="text-center member-card bg-blue rounded-md p-4"
                                    title={`${member.name} - ${member.position}`}>
                                            <a target="_blank">
                                                <div className="avatar-div overflow-hidden rounded-md mb-4 flex justify-center items-center bg-light-gray max-w-3xl w-60 m-0 h-60">
                                                    <img src={member.image_url} alt="Member-Avatar" />
                                                </div>
                                                <div>
                                                    <h2 className="text-white text-md font-semibold mb-1">
                                                        {member.name}
                                                    </h2>
                                                    <h3 className="text-light-gray text-sm font-normal">
                                                        {member.position}
                                                    </h3>
                                                    <h3 className="text-light-gray text-sm font-normal">
                                                        <a href={member.website}><FontAwesomeIcon icon={faGlobe}/></a>
                                                        <a href={member.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a>
                                                        <a href={member.twitter}><FontAwesomeIcon icon={faTwitter}/></a>
                                                    </h3>
                                                </div>
                                            </a>
                                </div>
                            )
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default TalksHero;
