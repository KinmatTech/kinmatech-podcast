'use client';

import Link from 'next/link';  // Import Link for routing
import React from 'react';

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9 px-5'>
      {/* Header Section */}
      <section className='flex flex-col gap-5'>
        <h1 className="text-4xl font-bold text-white-1">Trending Podcasts</h1>
        <p className="text-lg text-gray-400">
          Discover the most popular podcasts right now.
        </p>
      </section>

      {/* Navigation Buttons */}
      <div className='flex gap-4 mb-6'>
        <Link href="/podcasts">
          <button className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
            View All Podcasts
          </button>
        </Link>
        <Link href="/about">
          <button className='px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700'>
            About Us
          </button>
        </Link>
      </div>

      {/* Podcast Listing */}
      {/* Your existing trendingPodcasts section here */}
    </div>
  );
};

export default Home;
