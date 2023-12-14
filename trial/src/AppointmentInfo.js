import { BiTrash } from "react-icons/bi"

const AppointmentInfo = ({ Appointment, onDeleteAppointment }) => {
    return(
    <li className="px-3 py-3 flex items-start">
            <button
              type="button"
              className="p-1.5 mr-1.5 mt-1 rounded 
                        text-white 
                        bg-red-500 
                        hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-blue-500"
              onClick={() => {
                onDeleteAppointment(Appointment.id)
              }}
            >
              <BiTrash />
            </button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-500">
                  {Appointment.petName}
                </span>
                <span className="flex-grow text-right">{Appointment.aptDate}</span>
              </div>
              <div>
                <b className="font-bold text-blue-500">Owner:</b> {Appointment.ownerName}
              </div>
              <div className="leading-tight">{Appointment.aptNotes}</div>
            </div>
          </li>
    )
}

export default AppointmentInfo