// Login and session functions

function getStoredUser() {
  let user = localStorage.getItem('institute_user');
  if (!user) {
    const newUser = { email: 'student@institute.com', password: '123456', name: 'Student' };
    localStorage.setItem('institute_user', JSON.stringify(newUser));
    return newUser;
  }
  return JSON.parse(user);
}

function loginUser(email, password) {
  const user = getStoredUser();
  if (email === user.email && password === user.password) {
    localStorage.setItem('institute_session', JSON.stringify({ email: user.email, name: user.name }));
    return { success: true };
  }
  return { success: false, message: 'Invalid email or password.' };
}

function getCurrentUser() {
  const session = localStorage.getItem('institute_session');
  return session ? JSON.parse(session) : null;
}
