import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const post = {
  title: 'Dinosaurs',
  author: 'Patrick',
  body: 'I love dinosaurs',
  comments: [
    'This book is about the majestic pteranodons',
    "Pteranadons are so cool aren't they",
    'Yeah, I agree. So cool',
    "Wait a minute. Why's it called Hello Dinosaurs then? Shouldn't it be hello pteranodons?",
  ],
};

root.render(<App post={post} />);
