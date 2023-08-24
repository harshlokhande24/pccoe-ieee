import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import TalksHero from '../../components/Teams-Hero';
import Subscription from '../../components/Subscribtion';
import Footer from '../../components/Footer';

const Talks = () => {
  return (
    <div>
        <Head>
            <title>Talks - IEEE - Student Branch PCCOE</title>
            <meta name="description" content="IEEE STUDENTS BRANCH" />
            <link rel="icon" href="/logo_dark_mode.webp" />
        </Head>
        <div className="max-w-7xl w-100 m-auto px-4">
            <Navbar />
        </div>
        <TalksHero />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Talks;