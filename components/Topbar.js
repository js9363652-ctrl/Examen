function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [notifications] = React.useState([
      { id: 1, text: 'Nuevo documento agregado', time: 'Hace 5 min' },
      { id: 2, text: 'Actualización del sistema', time: 'Hace 1 hora' },
      { id: 3, text: 'Reunión programada', time: 'Hace 2 horas' }
    ]);

    return (
      <div className="bg-black text-white p-4 flex justify-end items-center space-x-6" data-name="topbar" data-file="components/Topbar.js">
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative hover:bg-gray-800 p-2 rounded-lg"
          >
            <div className="icon-bell text-xl"></div>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold">Notificaciones</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map(notif => (
                  <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                    <p className="text-sm">{notif.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-white" />
          <div>
            <p className="font-bold text-sm">{user.name}</p>
            <p className="text-xs text-gray-400">{user.role}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar error:', error);
    return null;
  }
}