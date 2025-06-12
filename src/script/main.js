// import { renderChat } from '../data/data.json';

// document.addEventListener('DOMContentLoaded', async () => {
//   const container = document.getElementById('chat-container');

//   try {
//     const response = await fetch('src/data/data.json');
//     const jsonData = await response.json();

//     jsonData.results.forEach(result => {
//       renderChat(container, result);
//     });
//   } catch (error) {
//     console.error('Failed to load data.json:', error);
//   }
// });

// import { data } from '../data/data.js';
// import { renderChat } from './render.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('chat-container');
//   data.results.forEach(result => {
//     renderChat(container, result);
//   });
// });

import { data } from '../data/data.js';
import { renderChat } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chat-container');
  data.results.forEach(result => {
    renderChat(container, result);
  });
});

