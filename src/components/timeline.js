import React from 'react';

import TimelineItem from './timelineItem';
const timelineData = [
  {
    category: {
      tag: 'Alchemy Code',
      color: '#018f69',
    },
    date: 'May 24, 1990',
    text:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma Burth',
    id: Date.now() + 1,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1991',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 1st Burphday',
    id: Date.now() + 2,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1992',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 2nd Burphday',
    id: Date.now() + 3,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
  {
    category: {
      tag: 'medium',
      color: '#018f69',
    },
    date: 'May 24, 1993',
    detail:
      'it was the best of times, it was the worst of times. Is anyone reading this yet?',
    eventName: 'Ma 3rd Burphday',
    id: Date.now() + 4,
    link: {
      url: '',
      text: '',
    },
  },
];

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, i) => (
        <TimelineItem data={data} key={i} />
      ))}
    </div>
  );

export default Timeline;
