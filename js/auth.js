// =========================================
// Simple Login (localStorage)
// =========================================
// For demo only — NOT secure. Real apps need backend + password hashing.

// ----- Get the registered demo user (or create default) -----
function getDemoUser() {
  let user = localStorage.getItem('institute_user');
  if (!user) {
    // Default demo account — anyone can log in with this
    const defaultUser = { email: 'student@institute.com', password: '123456', name: 'Student' };
    localStorage.setItem('institute_user', JSON.stringify(defaultUser));
    return defaultUser;
  }
  return JSON.parse(user);
}

// ----- Login user -----
function loginUser(email, password) {
  const user = getDemoUser();
  if (email === user.email && password === user.password) {
    localStorage.setItem('institute_session', JSON.stringify({ email: user.email, name: user.name }));
    return { success: true };
  }
  return { success: false, message: 'Invalid email or password. Try: student@institute.com / 123456' };
}

// ----- Get current logged-in user -----
function getCurrentUser() {
  const session = localStorage.getItem('institute_session');
  return session ? JSON.parse(session) : null;
}
