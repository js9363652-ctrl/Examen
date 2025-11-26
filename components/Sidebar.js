function Sidebar({ isOpen, onToggle }) {
  try {
    const currentPath = window.location.pathname;

    return (
      <>
        <div className={`fixed top-0 left-0 h-full bg-black text-white transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`} data-name="sidebar" data-file="components/Sidebar.js">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="icon-circle-dot text-3xl"></div>
                <span className="text-xl font-bold">Sistema</span>
              </div>
            </div>

            <nav className="space-y-2">
              <a href="dashboard.html" className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 ${currentPath.includes('dashboard') ? 'bg-blue-600' : ''}`}>
                <div className="icon-home text-xl"></div>
                <span>Inicio</span>
              </a>
              <a href="users.html" className={`flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 ${currentPath.includes('users') ? 'bg-blue-600' : ''}`}>
                <div className="icon-users text-xl"></div>
                <span>Usuarios</span>
              </a>
              <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 text-left">
                <div className="icon-log-out text-xl"></div>
                <span>Cerrar Sesión</span>
              </button>
            </nav>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-lg hover:bg-gray-800"
        >
          <div className={`icon-${isOpen ? 'x' : 'menu'} text-xl`}></div>
        </button>
      </>
    );
  } catch (error) {
    console.error('Sidebar error:', error);
    return null;
  }
}