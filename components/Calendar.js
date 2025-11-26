function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const celebrateDates = {
      '2025-01-01': 'Año Nuevo',
      '2025-12-25': 'Navidad',
      '2025-11-20': 'Día de la Revolución Mexicana'
    };

    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return { firstDay, daysInMonth };
    };

    const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    const changeMonth = (delta) => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() + delta);
      setCurrentDate(newDate);
    };

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Calendario</h2>
          <div className="flex space-x-2">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-left text-lg"></div>
            </button>
            <button onClick={() => setCurrentDate(new Date())} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
              Hoy
            </button>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-right text-lg"></div>
            </button>
          </div>
        </div>
        
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className="font-bold text-sm text-gray-600">{day}</div>
          ))}
          {days.map((day, idx) => (
            <div key={idx} className={`p-2 rounded ${day ? 'hover:bg-blue-100 cursor-pointer' : ''} ${day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() ? 'bg-blue-600 text-white' : ''}`}>
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar error:', error);
    return null;
  }
}