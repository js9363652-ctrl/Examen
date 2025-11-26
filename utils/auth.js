const USERS = [
  { username: 'superadmin1', password: 'super123', role: 'superusuario', name: 'Super Admin 1', avatar: 'https://ui-avatars.com/api/?name=Super+Admin+1&background=2563eb&color=fff' },
  { username: 'superadmin2', password: 'super123', role: 'superusuario', name: 'Super Admin 2', avatar: 'https://ui-avatars.com/api/?name=Super+Admin+2&background=2563eb&color=fff' },
  { username: 'admin1', password: 'admin123', role: 'admin', name: 'Administrador 1', avatar: 'https://ui-avatars.com/api/?name=Admin+1&background=10b981&color=fff' },
  { username: 'admin2', password: 'admin123', role: 'admin', name: 'Administrador 2', avatar: 'https://ui-avatars.com/api/?name=Admin+2&background=10b981&color=fff' },
  { username: 'user1', password: 'user123', role: 'usuario', name: 'Usuario 1', avatar: 'https://ui-avatars.com/api/?name=User+1&background=6366f1&color=fff' },
  { username: 'user2', password: 'user123', role: 'usuario', name: 'Usuario 2', avatar: 'https://ui-avatars.com/api/?name=User+2&background=6366f1&color=fff' }
];

function authenticateUser(username, password) {
  return USERS.find(u => u.username === username && u.password === password) || null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}