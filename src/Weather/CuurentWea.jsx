import React, { useState, useEffect } from "react";
import sun from './images/su.png'
import rainbow from './images/rain.png'
import cloud from './images/cloud.png'
import Loader from "../Loader";

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
  const[loading,setloading] = useState(1)



  // inial cond 1 = (     para       )

  // loading === state2 / setloading(cond 2)  =  ( loader )

  // setloading(con 3) = divzzzzzzzzz

// let condition1 = "nothing to show"




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
      const resJson = await response.json();

if (resJson) {
  setloading(3);
  settemp(resJson.main.temp);
  setcityname(resJson.name);
  setwea(resJson.weather[0].main);
}

  


      const respo = await fetch(urll);
      const respoJson = await respo.json();
    
      setcity(respoJson.coord);
  
      console.log("ciiityyyyyyyyy", searchCity);
      console.log("for city", respoJson);
      // console.log(resJson,"jsooooonnnnnn");
    } catch (error) {
      console.log(error, "i am error");
    }
  };
  // useEffect(() => {
  //   fetchApi();
  // }, [lat, lon, searchCity]);

  const handleClick = () => {
    setbtn(true);
  };
  const handleCurrent = () => {
    // setcurBtn(true);
    setloading(2);
    fetchApi();
    
  };


  
  return (
    <div class="parent-div">
<div>
<h1>Real Time <br /> Weather <br /> Conditions</h1>
</div>

     <div className="rain-box">
     <div>
        <img className="rain" src={rainbow} alt="" />
      </div>
 <div className="box1">

<div className="current-para">
  <p>Check Weather of my current location</p>
</div>
     <div>
     <button onClick={handleCurrent} className="cloud-div">
  <div className=""><img className="cloud"  src={cloud} alt="" /></div>
  <div className="cloud-para"><p>Check</p></div>
</button>
     </div>

{/* {
  loading===true ? 
: <Loader />
} */}
{
  loading===1? <p>nothing to show </p> : ""
}
{
  loading===2? <Loader /> : ""
}
{
  loading===3?  <div>
  <h2 className="one">Location:{cityName}</h2>
  <h3 className="two">Temp:{temp}</h3>
<h3 className="three">Weather:{wea}</h3>
</div> : ""
}      
       
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
