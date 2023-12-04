import { useNavigate } from "react-router-dom";
import Venue from "./Venue";
import AdminButton from "./AdminButton";
const VenuesList = ({ venues, admin }) => {
  var navigate = useNavigate();
  const performClick = (evt) => {
    if (evt.target.name === "Mekan Ekle") {
      return navigate("/admin/managevenue");
    }
  };
  return (
    <div>
      {venues.map((venue, index) => (
        <Venue key={index} mekan={venue} admin={admin} />
      ))}

      {admin ? (
        <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="column pull-right">
              <AdminButton
                ad="Mekan Ekle"
                tur="success"
                onClick={performClick}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default VenuesList;
