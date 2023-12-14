import { BiCalendar } from "react-icons/bi";
import Search from "./Search";
import AddAppointment from "./AddApointment";
import AppointmentList from "./data.json";
import AppointmentInfo from "./AppointmentInfo";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divided-y divide-gray-200">
        {AppointmentList.map((Appointment) => (
          <AppointmentInfo key={Appointment.id}
            Appointment = {Appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
