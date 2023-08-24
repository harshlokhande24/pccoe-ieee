import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EpisodesTypes from '../components/Episodes-Types';
import State from '../components/State';
import Subscription from '../components/Subscribtion';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IEEE - Student Branch PCCOE</title>
        <meta name="description" content="IEEE STUDENTS BRANCH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/logo_dark_mode.webp" />
      </Head>
        <Script src="https://kit.fontawesome.com/0566a6c7a6.js"/>
      <div className="max-w-7xl w-100 m-auto px-4">
        <Navbar />
        <Hero />
      </div>
      <EpisodesTypes />
      <State />
      <Subscription />
      <Footer />
    </div>
  )
}
