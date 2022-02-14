import './App.css';
import httpClient from './httpClient';
import React, { useState, useEffect,useRef } from "react";
import AdCard from './components/adCard';
function App() {
  const [locationData,setLocationData] = useState(null);
  const [roundTrip,setroundTrip] = useState([]);
 useEffect(()=>{
  httpClient.getPackage(370285).then(data=>{
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
}, []);
    
  if(locationData==null){return ''}
  return (
    <div className="App">
      <header className="container">
       
          {locationData.locations.map((e, i)=>{
            return (
          <AdCard key={i} locationData={e} title={locationData.title} roundTripArray={roundTrip} price={locationData.price} />
          );})}
      </header>
    </div>
  );
  }

export default App;
  