import InputWithLabel from "./InputWithLabel";
import VenuesList from "./VenuesList";
import venueReducer from "../services/VenueReducer";
import React from "react";
const useCookies = (key, defaultValue) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  return [value, setValue];
};

const Home = () => {
  const [searchVenue, setSearchMenu] = useCookies("searchVenue", "");
  const [venues, setVenues] = React.useReducer(venueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  const [coordinate, setCoordinate] = React.useState({ lat: 0, long: 0 });
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinate({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);
  const search = (event) => {
    setSearchMenu(event.target.value);
  };
  const filteredVenue = venues.data.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchVenue.toLowerCase()) ||
      venue.address.toLowerCase().includes(searchVenue.toLowerCase())
  );
  return (
    <div>
      <div className="page-header">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Mekanbul <small>Civardaki mekanları Keşfedin!</small>
            </h1>
          </div>
        </div>
      </div>
      <InputWithLabel
        id="arama"
        etiket="Mekan Ara:"
        tur="text"
        isFocused
        onDegerDegisim={search}
        deger={searchVenue}
      />
      <hr />
      {venues.isError && (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      )}
      {venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        <div className="row">
          <VenuesList venues={filteredVenue} admin={false} />
        </div>
      )}
    </div>
  );
};

export default Home;
