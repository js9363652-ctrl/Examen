function DocumentPanel() {
  try {
    const [documents] = React.useState([
      { id: 1, name: 'Reporte Mensual', status: 'Completado', date: '2025-11-25', statusColor: 'green' },
      { id: 2, name: 'Análisis de Datos', status: 'En Progreso', date: '2025-11-24', statusColor: 'yellow' },
      { id: 3, name: 'Propuesta Proyecto', status: 'Pendiente', date: '2025-11-23', statusColor: 'red' },
      { id: 4, name: 'Informe Trimestral', status: 'Completado', date: '2025-11-22', statusColor: 'green' }
    ]);

    const getStatusColor = (color) => {
      const colors = {
        green: 'bg-green-100 text-green-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        red: 'bg-red-100 text-red-800'
      };
      return colors[color] || 'bg-gray-100 text-gray-800';
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="document-panel" data-file="components/DocumentPanel.js">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Panel de Documentos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Documento</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Estado</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Última Modificación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {documents.map(doc => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{doc.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(doc.statusColor)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentPanel error:', error);
    return null;
  }
}