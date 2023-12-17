import React, { useState } from 'react'

const Location = () => {
    const[location,setlocation] = useState(true)
    const[loc,setloc] =useState(null)
//     const[no,setno] = useState("")

//     const Location=(position)=>{
//       setlocation(position.coords.latitude);
//       console.log(position,"i am posi");
//     }
   
// const noLoc=()=>{
//   setno("something went wrong")
// }

// window.navigator.geolocation.getCurrentPosition((Location),(noLoc))

// const showPosition=(position)={

// }

// const showLocation=()=>{
//     if (location===true) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//        console.log("somethinf went wrong");
//       }
// }


const showLocation=()=>{
  setlocation(!location)
if(location===true){
 const navi=  window.navigator.geolocation.getCurrentPosition((position)=>{setloc(position.coords.latitude);
  console.log("navvv", position)}
 )
;
}
}
  return (
    <div>
       <button onClick={showLocation}>Show my location</button>
{
  location==true? <div>Lattitude: {loc}</div> : ""
}
       {/* <div>Lattitude: {location}</div>
    <div>ErrorMessage: {no}</div> */}
    </div>
  )
}

export default Location
