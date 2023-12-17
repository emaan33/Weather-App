import React, { useState, useEffect } from "react";
import sun from './images/su.png'
import rainbow from './images/rain.png'
import cloud from './images/cloud.png'

const CuurentWea = () => {
  const [lon, setlon] = useState(0);
  const [lat, setlat] = useState(0);
  const [searchCity, setsearchCity] = useState("");
  const [cityName, setcityname] = useState();
  const [temp, settemp] = useState();
  const [wea, setwea] = useState();
  const [city, setcity] = useState(null);
  const [btn, setbtn] = useState(false);
  const [curBtn, setcurBtn] = useState(false);
  const curPosition = (position) => {
    setlat(position.coords.latitude);
    setlon(position.coords.longitude);
  };

  const fetchApi = async () => {
    try {
      window.navigator.geolocation.getCurrentPosition(curPosition);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=584dc002b419db994fef7767077ef717`;
      const urll = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=584dc002b419db994fef7767077ef717`;
      const response = await fetch(url);
      const respo = await fetch(urll);

      const resJson = await response.json();
      const respoJson = await respo.json();
      settemp(resJson.main.temp);
      setcityname(resJson.name);
      setwea(resJson.weather[0].main);
      setcity(respoJson.coord);
      console.log("ciiityyyyyyyyy", searchCity);
      console.log("for city", respoJson);
      // console.log(resJson,"jsooooonnnnnn");
    } catch (error) {
      console.log(error, "i am error");
    }
  };
  useEffect(() => {
    fetchApi();
  }, [lat, lon, searchCity]);

  const handleClick = () => {
    setbtn(true);
  };
  const handleCurrent = () => {
    setcurBtn(true);
  };


  
  return (
    <div class="parent-div">

{/* <p className="me-para">Real Time <br />Weather Conditions</p> */}

<h1>Real Time <br /> Weather <br /> Conditions</h1>

     <div className="rain-box">
     <div>
        <img className="rain" src={rainbow} alt="" />
      </div>
 <div className="box1">
      <button onClick={handleCurrent} className="cloud-div">
  <div className=""><img className="cloud"  src={cloud} alt="" /></div>
  <div className="cloud-para"><p>My Location</p></div>
</button>

        {curBtn === true ? <div>
          <h2 className="one">Location:{cityName}</h2>
          <h3 className="two">Temp:{temp}</h3>
        <h3 className="three">Weather:{wea}</h3>
        </div>
        
        
        : ""}
       
     <div className="input-clout">
     <div>
       <input
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setsearchCity(e.target.value);
          }}
        />
       </div>
       <div>
       <button onClick={handleClick} className="cloud-div">
  <div className=""><img className="cloud"  src={cloud} alt="" /></div>
  <div className="cloud-para"><p>Search</p></div>
</button>
       </div>
     </div>
        {btn === true ? (
          <div>
            <h3>{searchCity}</h3>
            <h1 className="temp">{city.lon}</h1>
            <h1 className="temp">{city.lat}</h1>
          </div>
        ) : (
          ""
        )}
       
      </div>
     </div>

      
      <div>
        <img className="sun" src={sun} alt="" />
      </div>



    </div>
  );
};

export default CuurentWea;
