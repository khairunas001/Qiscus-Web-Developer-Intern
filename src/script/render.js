// export function renderChat(container, result) {
//   const { room, comments } = result;

//   const chatWrapper = document.createElement('div');
//   chatWrapper.className = 'd-flex flex-column flex-grow-1 h-100';

//   // Sticky & blurred header
//   const header = document.createElement('div');
//   header.className =
//     'chat-header sticky-top bg-white bg-opacity-75 backdrop-blur p-3 d-flex align-items-center gap-3 border-bottom';

//   const image = document.createElement('img');
//   image.src = room.image_url;
//   image.alt = room.name;
//   image.className = 'rounded';
//   image.style.width = '60px';
//   image.style.height = '60px';
//   image.style.objectFit = 'cover';

//   const title = document.createElement('div');
//   title.innerHTML = `<div class="fw-bold">${room.name}</div><small class="text-muted">Chat Room</small>`;

//   header.appendChild(image);
//   header.appendChild(title);
//   chatWrapper.appendChild(header);

//   // Chat body (scrollable area)
//   const body = document.createElement('div');
//   body.className = 'flex-grow-1 overflow-auto px-3 py-2 d-flex flex-column gap-2';
//   body.id = 'chat-body';

//   comments.forEach(comment => {
//     const msg = document.createElement('div');
//     msg.className = `chat-message ${getRoleClass(comment.sender)}`;
//     msg.innerHTML = `<strong>${getRoleName(comment.sender)}:</strong> ${comment.message}`;
//     body.appendChild(msg);
//   });

//   // Input at the bottom
//   const inputWrapper = document.createElement('div');
//   inputWrapper.className = 'chat-input border-top p-3 bg-light';
//   inputWrapper.innerHTML = `<input type="text" class="form-control" placeholder="Type a message..." />`;

//   chatWrapper.appendChild(body);
//   chatWrapper.appendChild(inputWrapper);

//   container.appendChild(chatWrapper);

//   // Scroll to bottom after rendering
//   body.scrollTop = body.scrollHeight;
// }

// function getRoleClass(sender) {
//   if (sender === 'agent@mail.com') return 'agent';
//   if (sender === 'customer@mail.com') return 'customer';
//   return 'admin';
// }

// function getRoleName(sender) {
//   if (sender === 'agent@mail.com') return 'Agent';
//   if (sender === 'customer@mail.com') return 'Customer';
//   return 'Admin';
// }


export function renderChat(container, result) {
  const { room, comments } = result;

  const chatWrapper = document.createElement('div');
  chatWrapper.className = 'd-flex flex-column flex-grow-1 h-100';

  // Sticky, blurred header
  const header = document.createElement('div');
  header.className =
    'chat-header sticky-top bg-white bg-opacity-75 backdrop-blur p-3 d-flex align-items-center gap-3 border-bottom';

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
  chatWrapper.appendChild(header);

  // Chat body
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
    } else if (comment.type === "youtube") {
      const videoId = comment.media_url.split("v=")[1].split("&")[0];
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      const link = document.createElement("a");
      link.href = comment.media_url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const img = document.createElement("img");
      img.src = thumbnailUrl;
      img.alt = "YouTube Thumbnail";
      img.className = "img-fluid rounded"; // Bootstrap style

      const caption = document.createElement("p");
      caption.textContent = comment.message;

      link.appendChild(img);
      msg.appendChild(caption);
      msg.appendChild(link);
    }


    body.appendChild(msg);
  });

  // Input
  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'chat-input border-top p-3 bg-light';
  inputWrapper.innerHTML = `<input type="text" class="form-control" placeholder="Type a message..." />`;

  chatWrapper.appendChild(body);
  chatWrapper.appendChild(inputWrapper);
  container.appendChild(chatWrapper);

  // Scroll to bottom
  body.scrollTop = body.scrollHeight;
}

function getRoleClass(sender) {
  if (sender === 'agent@mail.com') return 'agent';
  if (sender === 'customer@mail.com') return 'customer';
  return 'admin';
}

function getRoleName(sender) {
  if (sender === 'agent@mail.com') return 'Agent';
  if (sender === 'customer@mail.com') return 'Customer';
  return 'Admin';
}
