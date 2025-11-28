function StatCard({ title, value, color, icon }) {
  try {
    return (
      <div 
        className="bg-green-500 p-6 rounded-lg shadow-lg"
        data-name="stat-card"
        data-file="components/StatCard.js"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-bold mb-2">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
          </div>
          <div className="w-14 h-14 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
            <div className={`icon-${icon} text-2xl text-white`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatCard component error:', error);
    return null;
  }
}
