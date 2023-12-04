import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrink from "./FoodAndDrink";
import AdminButton from "./AdminButton";
import { useNavigate } from "react-router-dom";
const Venue = ({ venue, admin }) => {
  var navigate = useNavigate();
  const performClick= (evt) => {
  };

  var formatDistance = function (distance) {
    var newDistance, unit;
    if (distance > 1) {
      newDistance = parseFloat(distance).toFixed(1);
      unit = " km";
    } else {
      newDistance = parseInt(distance * 1000, 10);
      unit = " m";
    }
    return newDistance + unit;
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
            <FoodAndDrink foodandDrinkList={venue.foodAndDrink} />
          </p>
         
        </div>
      </div>
    </div>
  );
};
export default Venue;
