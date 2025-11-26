function StatsCard() {
  try {
    const cards = [
      {
        id: 1,
        title: 'Usuarios Activos',
        value: '247',
        trend: '+12%',
        icon: 'users',
        bgColor: 'bg-blue-200',
        iconBg: 'bg-white',
        iconColor: 'text-blue-600',
        trendColor: 'text-green-600'
      },
      {
        id: 2,
        title: 'Documentos',
        value: '1,234',
        trend: '+8%',
        icon: 'file-text',
        bgColor: 'bg-green-200',
        iconBg: 'bg-white',
        iconColor: 'text-green-600',
        trendColor: 'text-green-600'
      },
      {
        id: 3,
        title: 'Proyectos',
        value: '89',
        trend: '+23%',
        icon: 'folder',
        bgColor: 'bg-purple-200',
        iconBg: 'bg-white',
        iconColor: 'text-purple-600',
        trendColor: 'text-green-600'
      },
      {
        id: 4,
        title: 'Reuniones',
        value: '42',
        trend: '+5%',
        icon: 'calendar',
        bgColor: 'bg-orange-200',
        iconBg: 'bg-white',
        iconColor: 'text-orange-600',
        trendColor: 'text-green-600'
      }
    ];

    return (
      <>
        {cards.map(card => (
          <div key={card.id} className={`${card.bgColor} rounded-lg p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.iconBg} rounded-lg p-3`}>
                <div className={`icon-${card.icon} text-2xl ${card.iconColor}`}></div>
              </div>
              <div className={`icon-trending-up ${card.trendColor} text-xl`}></div>
            </div>
            <h3 className="text-gray-600 text-sm font-bold mb-1">{card.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className={`text-sm ${card.trendColor} mt-2`}>{card.trend} vs mes anterior</p>
          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error('StatsCard error:', error);
    return null;
  }
}
