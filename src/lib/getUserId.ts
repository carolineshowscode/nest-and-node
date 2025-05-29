export const getUserId = (): string => {
  if (typeof window === 'undefined') return 'server_user';
  const localId = localStorage.getItem('nest-and-node-user-id');
  if (localId) return localId;
  const newId = crypto.randomUUID();
  localStorage.setItem('nest-and-node-user-id', newId);
  return newId;
};
