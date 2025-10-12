import axios from "axios";
import React, { useEffect, useState } from "react";
import Map from "./Map"; 

const IpFinder = () => {
  const [ipDetails, setIpDetails] = useState({});
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json") 
      .then((res) => {
        setIpDetails(res.data);
        const [latitude, longitude] = res.data.loc.split(",");
        setLat(parseFloat(latitude));
        setLon(parseFloat(longitude));
      })
      .catch((err) => alert("❌ " + err.message));
  }, []);

  return (
    <>
      <h1 className="heading">🌐 IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>

          <h4>Approximate location:</h4>
          <p>
            {ipDetails.city}, {ipDetails.region}, {ipDetails.country}
          </p>

          <h4>Internet Service Provider (ISP):</h4>
          <p>{ipDetails.org}</p>
        </div>

        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
};

export default IpFinder;
