export function renderHeader(room) {
  const header = document.createElement('div');
  header.className = 'chat-header sticky-top bg-white bg-opacity-75 backdrop-blur p-3 d-flex align-items-center gap-3 border-bottom';

  const image = document.createElement('img');
  image.src = room.image_url;
  image.alt = room.name;
  image.className = 'rounded';
  image.style.width = '60px';
  image.style.height = '60px';
  image.style.objectFit = 'cover';

  const title = document.createElement('div');
  title.innerHTML = `<div class="fw-bold">${room.name}</div><small class="text-muted">Chat Room</small>`;

  header.appendChild(image);
  header.appendChild(title);
  return header;
}
