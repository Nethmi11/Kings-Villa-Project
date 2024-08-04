import React from "react";
import Map2 from "./Components/Map/Map2";
import Footer from "./Components/Footer/Footer";
import First_Page from "./Components/First_Page/First_Page";
import TestimonialCarousel from './Components/Reviews/TestimonialCarousel.js';
import RoomCategories from "./Components/RoomCategories/Roomcategories";
import CheckIn from "./Components/Check-in_Check-out/checkIn";



function App() {
  return (
    <>
      <First_Page /> 
      <CheckIn />    
      {/* <Map /> */}
      <Map2/>
      <TestimonialCarousel />
      <RoomCategories />
      <Footer />
      
      
    </>
  )
}
export default App;
