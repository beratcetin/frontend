import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrink from "./FoodAndDrink";
import Header from "./Header";
import Hours from "./Hours";
import Comment from "./Comment";
import venueReducer from "../services/VenueReducer";
const VenueDetail = () => {
  const [venue, dispatchVenue] = React.useReducer(venueReducer, {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  const { id } = useParams();
    return (
      <div>
        <Header headerText={venue.data.name} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="row">
                <div className="col-xs-12 col-sm-6 ">
                  <p className="rating">
                    <Rating puan={venue.data.rating} />
                  </p>
                  <p>{venue.data.address}</p>
                  <div className="panel panel-primary">
                    <div className="panel-heading ">
                      <h2 className="panel-title ">Açılış Saatleri</h2>
                    </div>
                    <div className="panel-body ">
                      {venue.isSuccess ? (
                        <Hours saatler={venue.data.hours} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="panel panel-primary">
                    <div className="panel-heading ">
                      <h2 className="panel-title ">Neler Var?</h2>
                    </div>
                    <div className="panel-body ">
                      {venue.isSuccess ? (
                        <FoodAndDrink foodAndDrinkList={venue.data.foodAndDrinkList} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="panel panel-primary">
                    <div className="panel-heading ">
                      <h2 className="panel-title ">Konum Bilgisi</h2>
                    </div>
                    <div className="panel-body ">
                      <img
                        className="img img-responsive img-rounded"
                        alt="Konum Bilgisi"
                        src={`http://maps.googleapis.com/maps/api/staticmap?center=${venue.data.coordinate}&zoom=12&size=600x400&markers=${venue.data.coordinate}&key=AIzaSyCmmKygTpBzHGOZEciJpAdxC9v_tWHagnE`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 ">
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <NavLink
                      className="btn btn-default pull-right"
                      to={`/venue/${id}/yorum/yeni`}
                      state={{ name: venue.data.name }}
                    >
                      Yorum Ekle{" "}
                    </NavLink>
                    <h2 className="panel-title ">Yorumlar</h2>
                  </div>
                  <div className="panel-body ">
                    {venue.isSuccess ? (
                      <Comment commentList={venue.data.commentList} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default VenueDetail;
