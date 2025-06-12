export function mapParticipants(participants) {
  const map = {};
  participants.forEach(email => {
    const role = email.role === 0 ? 'admin' : email.role === 1 ? 'agent' : 'customer';
    map[email.id] = { name: email.name, role };
  });
  return map;
}