export function getRoleClass(sender) {
  if (sender === 'agent@mail.com') return 'agent';
  if (sender === 'customer@mail.com') return 'customer';
  return 'admin';
}
