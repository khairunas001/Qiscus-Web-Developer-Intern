export function getRoleName(sender) {
  if (sender === 'agent@mail.com') return 'Agent';
  if (sender === 'customer@mail.com') return 'Customer';
  return 'Admin';
}
