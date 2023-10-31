export function authenticate(username, password) {
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'admin';

  if (username === hardcodedUsername && password === hardcodedPassword) {
    return true; 
  }

  return false; 
}
