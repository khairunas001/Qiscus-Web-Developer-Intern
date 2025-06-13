import { renderHeader } from './renderHeader.js';
import { renderBody } from './renderBody.js';
import { renderInput } from './renderInput.js';

export function renderChat(container, result) {
  const { room, comments } = result;

  const chatWrapper = document.createElement('div');
  chatWrapper.className = 'd-flex flex-column flex-grow-1 h-100';

  const header = renderHeader(room);
  const body = renderBody(room, comments);
  const input = renderInput();

  chatWrapper.appendChild(header);
  chatWrapper.appendChild(body);
  chatWrapper.appendChild(input);
  container.appendChild(chatWrapper);

  // Auto scroll
  body.scrollTop = body.scrollHeight;
}
