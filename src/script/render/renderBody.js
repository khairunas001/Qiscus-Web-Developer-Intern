import { getRoleClass } from '../utils/getRoleClass.js';
import { getRoleName } from '../utils/getRoleName.js';

export function renderBody(room, comments) {
  const body = document.createElement('div');
  body.className = 'flex-grow-1 overflow-auto px-3 py-2 d-flex flex-column gap-2';
  body.id = 'chat-body';

  comments.forEach(comment => {
    const msg = document.createElement('div');
    msg.className = `chat-message ${getRoleClass(comment.sender)}`;
    const senderLabel = `<strong>${getRoleName(comment.sender)}:</strong><br/>`;

    if (comment.type === 'text') {
      msg.innerHTML = `${senderLabel}${comment.message}`;
    } else if (comment.type === 'image') {
      msg.innerHTML = `${senderLabel}${comment.message}<br/>`;
      const img = document.createElement('img');
      img.src = comment.media_url;
      img.alt = 'Image';
      img.className = 'img-fluid rounded mt-2';
      img.style.maxWidth = '300px';
      msg.appendChild(img);
    } else if (comment.type === 'video') {
      msg.innerHTML = `${senderLabel}${comment.message}<br/>`;
      const video = document.createElement('video');
      video.src = comment.media_url;
      video.controls = true;
      video.className = 'mt-2';
      video.style.maxWidth = '300px';
      msg.appendChild(video);
    } else if (comment.type === 'pdf') {
      msg.innerHTML = `${senderLabel}${comment.message}<br/>
        <a href="${comment.media_url}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">📄 View PDF</a>`;
    } else if (comment.type === 'youtube') {
      const videoId = comment.media_url.split("v=")[1]?.split("&")[0];
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      const link = document.createElement('a');
      link.href = comment.media_url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      const img = document.createElement('img');
      img.src = thumbnailUrl;
      img.alt = 'YouTube Thumbnail';
      img.className = 'img-fluid rounded';

      const caption = document.createElement('p');
      caption.textContent = comment.message;

      link.appendChild(img);
      msg.appendChild(caption);
      msg.appendChild(link);
    }

    body.appendChild(msg);
  });

  return body;
}
