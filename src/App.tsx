import AppointmentForm from './components/AppointmentForm';
import EcommercePage from './components/EcommercePage';
import './App.css';
import './App.css'

function App() {
  return (
    <div className="App" style={{padding:"5px 20px"}}>
      <h1>Appointment Form</h1>
      <AppointmentForm />
    </div>
  );
  return (
    <div className="App">
      <h1>Welcome to Our Online Shop!</h1>
      <EcommercePage /> {/* Render the EcommercePage component */}
    </div>
  );
}

export default App;