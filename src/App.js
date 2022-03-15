import './App.css';
import httpClient from './httpClient';
import React, { useState, useEffect,useRef } from "react";
import AdCard from './components/adCard';
function App() {
  const [locationData,setLocationData] = useState(null);
  const [roundTrip,setroundTrip] = useState([]);
  const [locationId,setId] = useState(370282);
  const [inputId,setInput] = useState(370282);
  const [emsg,setEMsg] = useState('');
 useEffect(()=>{
   console.log("new id:"+locationId)
  httpClient.getPackage(locationId).then(data=>{
    if(data=="error"){
      setEMsg("trip id does not exist :(");
      return;
    }else{
      setEMsg("");
    }
     setLocationData(data.tripDetails);
     let newroundTrip = [];
     for(let i=0;i<data.tripDetails.transportations.length;i++){
          if(i==0){
            newroundTrip.push(data.tripDetails.transportations[i].origin);
            newroundTrip.push(data.tripDetails.transportations[i].destination);
          }else{
            newroundTrip.push(data.tripDetails.transportations[i].destination);
          }
     }
     
     setroundTrip(newroundTrip);
  })
}, [locationId]);
    
  if(locationData==null){return ''}
  return (

    <div className="App">
      <header className="container">
        <form onSubmit={
          (e)=>{
            e.preventDefault();
            setId(inputId);

          }
        }>
        <label htmlFor='tripid'>Trip id: </label>
          <input type="number" value={inputId} onChange={
            (e)=>{setInput(e.target.value)}
          } id="tripid" />
          <input type="submit" value="Get Ad Image" />
        </form>
        <div id="err">
          {emsg}
        </div>
          {locationData.locations.map((e, i)=>{
            return (
          <AdCard key={i} locationData={e} title={locationData.title} roundTripArray={roundTrip} price={locationData.price}
          startDate={locationData.startDate} endDate={locationData.endDate} />
          );})}
      </header>
    </div>
  );
  }

export default App;
  