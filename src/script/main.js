import { renderChat } from '../script/render/renderChat.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chat-container');

  // if use fatch data from endpoint
  // fetch('https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json')

  // for development extend json
  fetch('src/data/data.json')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(result => {
        renderChat(container, result);
      });
    })
    .catch(error => {
      console.error('Failed to load JSON data:', error);
    });
});

