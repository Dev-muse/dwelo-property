"use client";

import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { setDefaults, fromAddress } from "react-geocode";
import Spinner from "./Spinner";
import Image from "next/image";
import pin from "@/assets/images/pin.svg";

const PropertyMap = ({ Property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });

  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY, // Your API key here.
    language: "en", // Default language for responses.
    region: "US", // Default region for responses.
  });

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${Property.location.street} ${Property.location.city} ${Property.location.state} ${Property.location.zipcode}`
        );

        //check response
        if (!res.results.length === 0) {
          // no results for property location
          setGeocodeError(true);
          setLoading(false);
          return;
        }

        const { lat, lng } = res.results[0].geometry.location;
        console.log(lat, lng);
        setLat(lat);
        setLng(lng);
        setViewport({
          ...viewport,
          latitude: lat,
          longitude: lng,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setGeocodeError(true);
        setLoading(false);
      }
    };
    fetchCoords();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  //   handle case where property geolocation fails
  if (geocodeError) {
    return <div className="text-xl">No location data found</div>;
  }
  return (
    !loading && (
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          latitude: lat,
          longitude: lng,
          zoom: 15,
        }}
        style={{ width: "100%", height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker latitude={lat} longitude={lng} anchor="bottom">
          {" "}
          <Image src={pin} alt="map pin " width={40} height={40} />
        </Marker>
      </Map>
    )
  );
};

export default PropertyMap;
