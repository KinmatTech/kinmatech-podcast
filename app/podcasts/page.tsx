'use client';

import React from 'react';

const trendingPodcasts = [
  {
    id: 1,
    title: 'The Tech Talk',
    host: 'John Doe',
    description: 'Latest trends and insights in technology.',
    image: '/images/tech-talk.jpg',
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

const podcastCategories = [
  'Technology',
  'Health & Wellness',
  'History',
  'Education',
  'Entertainment',
  'Science',
];

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9 px-5'>
      {/* Header Section */}
      <section className='flex flex-col gap-5 text-center'>
        <h1 className='text-4xl font-bold text-white-1'>Trending Podcasts</h1>
        <p className='text-lg text-gray-400'>
          Discover the most popular podcasts right now.
        </p>
      </section>

      {/* Featured Podcast Video */}
      <section className='flex flex-col items-center'>
        <h2 className='text-2xl font-semibold text-white-1 mb-4'>Featured Podcast Episode</h2>
        <div className='w-full md:w-2/3'>
          <video
            controls
            className='w-full rounded-lg shadow-md'
            poster='/images/featured-podcast.jpg'  // Placeholder image
          >
            <source src='/videos/featured-podcast.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p className='text-gray-300 text-center mt-3'>
            Watch the latest episode of <strong>"The Tech Talk"</strong> featuring AI innovations.
          </p>
        </div>
      </section>

      {/* Podcast Categories */}
      <section className='flex flex-wrap gap-4 justify-center'>
        {podcastCategories.map((category, index) => (
          <span
            key={index}
            className='bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700'
          >
            {category}
          </span>
        ))}
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