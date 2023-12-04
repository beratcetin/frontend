import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import AdminButton from "./AdminButton";
import { useNavigate } from "react-router-dom";
import {formatDistance} from "../services/Utils";
const Venue = ({ venue, admin }) => {
  const performClick= (evt) => {
  };
  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue._id}`} state={{ id: venue._id }}>
              {venue.name}{" "}
            </NavLink>
            <Rating score={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (<AdminButton tur="primary" ad="Sil" onClick={performClick}/>):""}
          {admin ? (<AdminButton tur="info" ad="Güncelle" onClick={performClick}/>):""}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodandDrinkList={venue.foodAndDrink} />
          </p>
         
        </div>
      </div>
    </div>
  );
};
export default Venue;
