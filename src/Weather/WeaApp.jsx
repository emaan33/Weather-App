import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';
import '../App.css'

  const WeaApp = () => {
  const[city,setcity] = useState(null);
  const[search,setsearch] = useState("");
  const[button,setbutton] = useState(false);
const[btn, setbtn] = useState(false);
// const [debounced , setdebounced] = useDebounce("")


    const fetchApi = async ()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=584dc002b419db994fef7767077ef717`
    const response = await fetch(url);
  //  console.log("heyyyyy", response);
   const resJson= await response.json();
  //  console.log(resJson,"hggggg");
   setcity(resJson.coord);
     }
// useEffect(() => {
//   fetchApi();
// console.log("i am debounce", debounced);

// }, [debounced])

// useEffect(() => {
//   const timerOut= setTimeout(() => {
//     setdebounced(debounced);
//     fetchApi();
//    console.log("location", navigator.geolocation);
//   }, 3000);

//   return () => {
//   clearTimeout(timerOut)
//   }
// }, [search,5000])


 console.log(search,"heyyyyy");
const handleClick=()=>{
  setbutton(true);
  
  fetchApi();
  setbtn(true)
}

const handleClear=()=>{
     setbtn(false)
     setsearch("")
   setcity("")

}

// console.log(debounced,"hhhhhsearcccccccch");
  return (
    <div>
         <div className='box'>
           <div className='box2'>
           <div className="inputData">
                <input type="search" className='input'
                value={search}
                onChange={(e)=>{setsearch(e.target.value)}} 
                />
            </div>


{
  btn==true? <button onClick={handleClear} className='search'>clear</button> : 
  <button onClick={handleClick} className='search'>Search</button>

}
           </div>

{
  !city? (
    <p className='no'>No Data Found</p>
  ) : 
  (  <div>
      <div className='info'>
<div className='parent'>

 {
  button==true?  <div>
  <h2 className='Location'>{search}</h2>
  {/* <div>
     <h1 className='temp'>{city.temp}</h1>
     </div> */}
     <div>
     <h1 className='temp'>{city.lon}</h1>
     <h1 className='temp'>{city.lat}</h1>
     </div>
     {/* <h3 className='min-max'>Min:{city.temp_min}Cel | Max:{city.temp_max} </h3> */}
</div> : ""
 }


      
</div>
     

        
         </div>
  </div> )
}
          
         </div>

       

        
    </div>
  )
}

export default WeaApp
