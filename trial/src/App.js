import { BiCalendar } from "react-icons/bi";
import Search from "./Search";
import AddAppointment from "./AddApointment";
//import AppointmentList from "./data.json";
import AppointmentInfo from "./AppointmentInfo";
import { useState, useEffect, useCallback } from 'react'

function App() {

  let [AppointmentList, setAppointmentList] = useState([]);
  let [Input, setInput] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])


  const filteredAppointments = AppointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(Input.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(Input.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(Input.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()  ? -1 * order : 1 * order
    )
  })

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />
        Your Appointments
      </h1>
      <AddAppointment /> 
      <Search 
        Input={Input}
        onInputChange={newInput => setInput(newInput)}
        orderBy = {orderBy}
        onOrderByChange = {sort => setOrderBy(sort)}
        sortBy = {sortBy}
        onSortByChange = {sort => setSortBy(sort)}/>

      <ul className="divided-y divide-gray-200">
        {filteredAppointments.map((Appointment) => (
          /*calling AppitmentList and map it to show every appointment from data.json
          * then set it up with the variable of Appointment
          */
          <AppointmentInfo 
          /*
            call the AppointmentInfo constant and send some important information including the
            delete function, that excludes only the appointment.id that we're selecting from the
            appointment list
          */
            key={Appointment.id}
            Appointment = {Appointment} 
            onDeleteAppointment = {
              AppointmentId => 
                setAppointmentList(AppointmentList.filter(Appointment => Appointment.id !== AppointmentId))
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
