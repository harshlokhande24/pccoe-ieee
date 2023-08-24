import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/About-Hero';
import Subscription from '../../components/Subscribtion';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div>
        <Head>
            <title>About - IEEE - Student Branch PCCOE</title>
            <meta name="description" content="IEEE STUDENTS BRANCH" />
            <link rel="icon" href="/logo_dark_mode.webp" />
        </Head>
        <div className="max-w-7xl w-100 m-auto px-4">
            <Navbar />
        </div>
        <AboutHero />
        <Subscription />
        <Footer />
    </div>
  )
}

export default About;