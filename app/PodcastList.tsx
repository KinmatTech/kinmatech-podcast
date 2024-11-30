import React from 'react';

const podcasts = [
  { id: 1, title: 'The Tech Talk', host: 'John Doe', audioUrl: '/podcasts/tech-talk.mp3' },
  { id: 2, title: 'Mind Matters', host: 'Jane Smith', audioUrl: '/podcasts/mind-matters.mp3' },
];

interface PodcastListProps {
  onSelect: (podcast: { title: string; audioUrl: string }) => void;
}

const PodcastList: React.FC<PodcastListProps> = ({ onSelect }) => (
  <div className='space-y-4'>
    {podcasts.map((podcast) => (
      <div key={podcast.id} className='p-4 bg-gray-800 rounded-lg cursor-pointer' onClick={() => onSelect(podcast)}>
        <h3 className='text-xl text-white'>{podcast.title}</h3>
        <p className='text-gray-400'>Host: {podcast.host}</p>
      </div>
    ))}
  </div>
);

export default PodcastList;
