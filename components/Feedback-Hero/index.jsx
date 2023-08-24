import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FcDocument } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import Typewriter from "typewriter-effect";

const TalksHero = () => {

    const showToast = (msg) => {
        toast(msg, {
            onChange: (close) => window.alert('Called when I close'),
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [feedtype, setFeedtype] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [feed, setFeed] = useState("");

    const formHandler = async (e) => {
        e.preventDefault();

        axios.post("https://api.pccoeieee.org/services/feedback/", {
            feedback_type: feedtype,
            first_name: fname,
            last_name: lname,
            email: email,
            feedback: feed,
        },)
            .then(function (response) {
                showToast(response.data.message)
                console.log();
            })
    }

    return (
        <div>
            <div className="max-w-7xl w-100 m-auto px-4 grid grid-cols-1 gap-10 py-10 place-items-center md:grid-cols-2 md:py-16 md:mb-14">
                <div className="w-100">
                    <h1 className="text-center text-4xl text-pink font-bold md:text-left md:text-5xl">We need your Feedback</h1>
                    <div className="mb-6 text-md font-medium text-dark text-center md:text-left leading-8">
                        <Typewriter
                            options={{
                                strings: [
                                    "We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <Link href="#form">
                        <a
                            title="Join Us"
                            className="hero-button flex justify-center items-center gap-3 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0"
                        >
                            <span className="text-xl md:text-xl">
                                <FcDocument />
                            </span>
                            <span>Fill form</span>
                        </a>
                    </Link>
                </div>

                <div className="w-100">
                    <img src="/content.svg" alt="Content" />
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="content bg-light-purple py-20 md:py-36" id="form">
                <div className="max-w-7xl w-100 m-auto px-4">
                    <h2 className="mb-10 text-white text-2xl font-semibold text-center md:mb-20 md:text-4xl">
                        Your feedback is important to us.
                    </h2>
                    <div className="grid place-items-center grid-cols-1 gap-6">
                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-1 md:gap-6">
                                <div className="mt-5 md:col-span- md:mt-0">
                                    <form action="#" method="POST" onSubmit={formHandler}>
                                        <div className="overflow-hidden shadow sm:rounded-md">
                                            <fieldset className="mx-5">
                                                <legend className="contents text-base font-medium text-white">Feedback Type</legend>
                                                <div className="mt-4 space-y-4">
                                                    <div className="flex items-center">
                                                        <input id="push-nothing" name="push-notifications" value="Appreciation" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={(e) => setFeedtype(e.target.value)} />
                                                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-white">Appreciation</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="push-everything" name="push-notifications" value="Suggestions" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={(e) => setFeedtype(e.target.value)} />
                                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-white">Suggestions</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="push-email" name="push-notifications" value="Concerns" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={(e) => setFeedtype(e.target.value)} />
                                                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-white">Concerns</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="push-nothing" name="push-notifications" value="Thoughts" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={(e) => setFeedtype(e.target.value)} />
                                                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-white">Thoughts</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="push-nothing" name="push-notifications" value="Problems" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={(e) => setFeedtype(e.target.value)} />
                                                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-white">Problems</label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className=" px-4 py-5 sm:p-6">
                                                <div className="grid grid-cols-1 gap-10">
                                                    <div className="col-span-5">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-white">First name</label>
                                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(e) => setFname(e.target.value)} />
                                                    </div>

                                                    <div className="col-span-5">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-white">Last name</label>
                                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(e) => setLname(e.target.value)} />
                                                    </div>

                                                    <div className="col-span-10">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-white">Email address</label>
                                                        <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(e) => setEmail(e.target.value)} />
                                                    </div>

                                                    <div className="col-span-10">
                                                        <label htmlFor="street-address" className="block text-sm font-medium text-white">Your feedback</label>
                                                        <textarea rows={4} name="street-address" id="street-address" autoComplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" onChange={(e) => setFeed(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 text-center sm:px-6">
                                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalksHero;
