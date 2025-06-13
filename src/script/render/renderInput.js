export function renderInput() {
  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'chat-input border-top p-3 bg-light';

  inputWrapper.innerHTML = `
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Type a message..." />
      <button class="btn btn-outline-secondary" type="button">Send</button>
    </div>
  `;

  return inputWrapper;
}
