import React, { useContext, useRef,useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "../Properties/Properties.css";
import UserDetailContext from "../../context/UserDetailContext";
import { useAuth0 } from '@auth0/auth0-react'
const Bookings = () => {
  const { isAuthenticated } = useAuth0()
  useEffect(() => {
    !isAuthenticated && window.location.replace('/')}
    , []);
  const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
  const {
    userDetails: { bookings },
  } = useContext(UserDetailContext);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  const componentRef = useRef(null);

  useEffect(() => {
    !isAuthenticated && window.location.replace('/')
    if (componentRef.current && componentRef.current.children.length === 0) {
      const wElement = document.createElement('div');
      wElement.setAttribute('class', 'wrapper flexCenter');
      wElement.setAttribute.height='60vh';
      const emptyElement = document.createElement('p');
      emptyElement.textContent = 'no Bookings';
      wElement.appendChild(emptyElement);
      componentRef.current.appendChild(wElement);
    }
  }, []);


  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div id="bookings"  ref={componentRef} className="paddings flexCenter properties">
          {
            // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

            data
              .filter((property) =>
                bookings.map((booking) => booking.id).includes(property.id)
              )

              .filter(
                (property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <PropertyCard card={card} key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Bookings;
