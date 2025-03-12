import { useContext } from "react";
import { CreateAuth } from "../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";

const EventsCard = ({ value,openModal }) => {
    const { user,handleDelete } = useContext(CreateAuth);
    // const [eventValue, setEventValue] = useState(null);
    const pathLocation = useLocation();

    const { id, title, description, date, location, category } = value;

    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: 'numeric'
    })

    const hidebtn = [`/history/${user.id}`];
    const showbtn = hidebtn.includes(pathLocation.pathname);

    return (
        <div className="card shadow-md my-5 border border-black">

            <div className="card-body">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="font-thin">{description}</p>
                <p><span className="font-medium">Event Start:</span> {formattedDate}</p>
                <p><span className="font-medium">Location:</span> {location}</p>
                <p><span className="font-medium">Category:</span> {category}</p>
                {
                    user.role === "volunteer" ? <div>
                        {/* <button onClick={() => handleJoiEvents(id)} className="btn btn-success font-bold">Join Event</button> */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {
                            showbtn ? <button className="btn btn-error font-bold" onClick={() => handleDelete(id)}>Delete</button>
                            : <button className="btn btn-success font-bold" onClick={() => openModal(value)}>Join Event</button>
                        }

                    </div> : <div className="mt-2">
                        <button className="btn btn-primary font-bold">Edit</button>
                        <button className="btn btn-error ml-3 font-bold">Delete</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default EventsCard;