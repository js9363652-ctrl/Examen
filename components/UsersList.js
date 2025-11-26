function UsersList() {
  try {
    const [users] = React.useState([
      { id: 1, name: 'Super Admin 1', username: 'superadmin1', role: 'superusuario', email: 'superadmin1@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=Super+Admin+1&background=2563eb&color=fff' },
      { id: 2, name: 'Super Admin 2', username: 'superadmin2', role: 'superusuario', email: 'superadmin2@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=Super+Admin+2&background=2563eb&color=fff' },
      { id: 3, name: 'Administrador 1', username: 'admin1', role: 'admin', email: 'admin1@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=Admin+1&background=10b981&color=fff' },
      { id: 4, name: 'Administrador 2', username: 'admin2', role: 'admin', email: 'admin2@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=Admin+2&background=10b981&color=fff' },
      { id: 5, name: 'Usuario 1', username: 'user1', role: 'usuario', email: 'user1@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=User+1&background=6366f1&color=fff' },
      { id: 6, name: 'Usuario 2', username: 'user2', role: 'usuario', email: 'user2@sistema.com', status: 'Activo', avatar: 'https://ui-avatars.com/api/?name=User+2&background=6366f1&color=fff' },
      { id: 7, name: 'Usuario 3', username: 'user3', role: 'usuario', email: 'user3@sistema.com', status: 'Inactivo', avatar: 'https://ui-avatars.com/api/?name=User+3&background=6366f1&color=fff' }
    ]);

    const getRoleBadge = (role) => {
      const badges = {
        superusuario: 'bg-blue-100 text-blue-800',
        admin: 'bg-green-100 text-green-800',
        usuario: 'bg-purple-100 text-purple-800'
      };
      return badges[role] || 'bg-gray-100 text-gray-800';
    };

    const getStatusBadge = (status) => {
      return status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    };

    return (
      <div className="bg-white rounded-lg shadow-lg" data-name="users-list" data-file="components/UsersList.js">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h2>
          <p className="text-gray-600 mt-1">Lista de todos los usuarios del sistema</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Usuario</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Username</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Rol</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                      <span className="text-sm font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.username}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsersList error:', error);
    return null;
  }
}