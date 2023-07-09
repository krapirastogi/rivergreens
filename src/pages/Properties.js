import React from "react";
import PropertyBanner from "../components/Banner/PropertyBanner";
import Nav from "../components/Nav/Nav";

import Overview from "../components/Overview/Overview";
import Ameneties from "../components/Amenities/Amenities";
import LocationAdvantage from "../components/LocationAdvantage/LocationAdvantage";
import VirtualTour from "../components/VirtualTour/VirtualTour";

import Map from "../components/Map/Map";
import PropertyPricing from "../components/Table/PropertyPricing";


import PropertyDeveloper from "../components/ReadMore/PropertyDeveloper";
import Form from "../components/Form/Form";
import Banner2 from "../components/Banner/Banner2";

const Properties = () => {
  return (
    <>
      <PropertyBanner />
      <Nav />
      <Overview/>
      <Banner2/>
      <Ameneties />
      
      <PropertyPricing />
     <LocationAdvantage/>
      
      <VirtualTour />
      
     
      <Map />
      
      
      <PropertyDeveloper />
      <Form />
    </>
  );
};

export default Properties;
