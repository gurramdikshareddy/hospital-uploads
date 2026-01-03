import { Upload } from 'lucide-react';

const DOCTORS = [
  { name: 'Dr. Sharma', speciality: 'Cardiology' },
  { name: 'Dr. Patel', speciality: 'Orthopedics' },
  { name: 'Dr. Kumar', speciality: 'Neurology' },
  { name: 'Dr. Singh', speciality: 'General Medicine' },
  { name: 'Dr. Reddy', speciality: 'Pediatrics' },
  { name: 'Dr. Mehta', speciality: 'Dermatology' }
];

export default function VisitSection() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Section 2: Visit</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-300 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Visits CSV</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <label className="cursor-pointer">
              <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
              <input type="file" accept=".csv" className="hidden" />
            </label>
            <p className="text-xs text-gray-500 mt-2">CSV files only</p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add Visit</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visit ID</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-xs text-gray-500 mt-1">Patient must exist</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visit Date</label>
              <input type="date" defaultValue={today} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Severity Score (1-10)</label>
              <input type="number" min="1" max="10" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visit Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="OP">OP (Out-Patient)</option>
                <option value="IP">IP (In-Patient)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length of Stay (days)</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lab Result - Glucose</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lab Result - Blood Pressure</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Previous Visit Gap (days)</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Readmitted Within 30 Days</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visit Cost (₹)</label>
              <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                {DOCTORS.map((doctor) => (
                  <option key={doctor.name} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Speciality</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                {DOCTORS.map((doctor) => (
                  <option key={doctor.speciality} value={doctor.speciality}>
                    {doctor.speciality}
                  </option>
                ))}
              </select>
            </div>

            <button type="button" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Add Visit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
