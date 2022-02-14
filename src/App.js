import logo from './logo.svg';
import './App.css';
import httpClient from './httpClient';
import React, { useState, useEffect,useRef } from "react";
import AdCard from './components/adCard';
function App() {
  const [locationData,setLocationData] = useState(null);
  const [roundTrip,setroundTrip] = useState([]);
 // const [locationData,setLocationData] = useState(null);
 useEffect(()=>{
  httpClient.getPackage(370285).then(data=>{
    //console.log("data"+(data.tripDetails.locations[1].picture));
      //<img width ='60%' alt={e.city_name} src={`${e.picture}188160.png`} />
     setLocationData(data.tripDetails);
     //setroundTrip(data.tripDetails.transportations);
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
       
        <p>
         
          {locationData.locations.map((e)=>{
            let adCardhtml = <AdCard locationData={e} title={locationData.title} roundTripArray={roundTrip} price={locationData.price} />;
            console.log(adCardhtml)
            return (
          <AdCard locationData={e} title={locationData.title} roundTripArray={roundTrip} price={locationData.price} />
          );})}
        </p>
        
      </header>
    </div>
  );
  }

export default App;
  