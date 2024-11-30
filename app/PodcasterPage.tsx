'use client'  // For Next.js with Client Components

import React from 'react';

// Mock podcast data
const trendingPodcasts = [
  {
    id: 1,
    title: 'The Tech Talk',
    host: 'John Doe',
    description: 'Latest trends and insights in technology.',
    image: '/images/tech-talk.jpg', // Add corresponding images to your public folder
  },
  {
    id: 2,
    title: 'Mind Matters',
    host: 'Jane Smith',
    description: 'Exploring mental health and mindfulness.',
    image: '/images/mind-matters.jpg',
  },
  {
    id: 3,
    title: 'History Untold',
    host: 'Mark Twain',
    description: 'Stories of untold historical events.',
    image: '/images/history-untold.jpg',
  },
];

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

      {/* Podcast Listing */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {trendingPodcasts.map((podcast) => (
          <div
            key={podcast.id}
            className='bg-gray-800 rounded-lg overflow-hidden shadow-md p-5 flex flex-col items-center'
          >
            <img
              src={podcast.image}
              alt={podcast.title}
              className='w-full h-48 object-cover rounded-md'
            />
            <h2 className='mt-4 text-xl font-semibold text-white-1'>{podcast.title}</h2>
            <p className='text-gray-400 text-sm mt-1'>Hosted by {podcast.host}</p>
            <p className='text-gray-300 text-sm mt-3 text-center'>{podcast.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;