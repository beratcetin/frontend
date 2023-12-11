import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import VenueReducer from "../services/VenueReducer";
import Header from "./Header";
import React from "react";
import VenueDataService from "../services/VenueDataService";

const useCookies = (key, defaultValue) => {
  const [cookie, setCookie] = React.useState(
    localStorage.getItem(key) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, cookie);
  }, [cookie, key]);
  return [cookie, setCookie];
};

const Admin = () => {
  const [searchVenue, setSearchVenue] = useCookies("searchVenue", "");
  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const search = (event) => {
    setSearchVenue(event.target.value);
  };

  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);

  const handleUpdate = (id) => {
    console.log(`Mekan Güncelle: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Mekan Sil: ${id}`);
  };

  const handleAdd = () => {
    console.log("Yeni Mekan Ekle");
    // Yeni mekan ekleme işlemleri buraya entegre edilebilir
  };

  const filteredVenues = venues.data.filter((venue) => venue.id === 4);

  return (
    <div>
      <Header headerText="Mekanbul" motto="Mekanlarinizi Yonetin !" />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar Yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            <VenueList venues={filteredVenues} admin={false} />
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="venue-box">
                <div>
                  <button className="custom-button update-button" onClick={() => handleUpdate(venue.id)}>
                    Mekan Güncelle
                  </button>
                  <button className="custom-button delete-button" onClick={() => handleDelete(venue.id)}>
                    Mekan Sil
                  </button>
                </div>
              </div>
            ))}
            <div className="venue-box">
              <div>
                <button className="custom-button add-button" onClick={handleAdd}>
                  Yeni Mekan Ekle
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Admin;
