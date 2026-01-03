import PatientSection from './components/PatientSection';
import VisitSection from './components/VisitSection';
import PrescriptionSection from './components/PrescriptionSection';

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Healthcare Data Entry</h1>

        <PatientSection />
        <VisitSection />
        <PrescriptionSection />
      </div>
    </div>
  );
}

export default App;
