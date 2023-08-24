import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className="bg-black py-12 px-4">
        <div className="max-w-7xl w-100 m-auto grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-3 place-items-center sm:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
                <Link href="/">
                    <a title="IEEE - Student Branch PCCOE">
                        <img src="/LOGO_LIGHT.PNG" alt="IEEE-Logo" className="max-w-sm w-40 m-0" />
                    </a>
                </Link>
                <h5 className="text-gray mt-4">
                    &copy; IEEE - Student Branch PCCOE 2023 - 2024
                </h5>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-white">Join The Community</h2>
                <ul className="mt-2 text-center md:text-left">
                    <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Instagram">
                        <Link href="https://www.instagram.com/pccoeieee">
                            <a target="_blank">
                                Instagram
                            </a>
                        </Link>
                    </li>
                    <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Facebook">
                        <Link href="https://www.facebook.com/pccoeieee/">
                            <a target="_blank">
                                Facebook
                            </a>
                        </Link>
                    </li>
                    <li className="text-gray w-max m-auto md:mx-0 hover:text-light-gray" title="Linkedin">
                        <Link href="https://www.linkedin.com/company/ieee-pccoe-student-branch/">
                            <a target="_blank">
                                Linkedin
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-center md:text-left">
                 <h5 className="mt-2 text-gray">
                    This website is made with ❤️ by {" "}
                    <Link href="/about#developers">
                        <a  className="text-pink">Webmasters - ITSA PCCOE 2022-23.</a>
                    </Link>
                </h5>
            </div>
        </div>
    </div>
  )
}

export default Footer;