'use client';

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Incidents</h2>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          + Report Incident
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 text-center py-12">
          No incidents reported yet. Reports will appear here.
        </p>
      </div>
    </div>
  );
}
