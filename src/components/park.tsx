import { useEffect, useState } from "react";
import Header from "./header";
import "../scss/park.scss";

export interface dataParkProps {
  id: string;
  url: string;
  fullName: string;
  parkCode: string;
  description: string;
  latitude: string;
  longitude: string;
  latLong: string;
  activities: [
    {
      id: string;
      name: string;
    }
  ];
  topics: [
    {
      id: string;
      name: string;
    }
  ];
  states: string;
  contacts: {
    phoneNumbers: [
      {
        phoneNumber: string;
        description: string;
        extension: string;
        type: string;
      }
    ];
    emailAddresses: [
      {
        description: string;
        emailAddress: string;
      }
    ];
  };
  entranceFees: [
    {
      cost: string;
      description: string;
      title: string;
    }
  ];
  entrancePasses: [];
  fees: [];
  directionsInfo: string;
  directionsUrl: string;
  operatingHours: [
    {
      exceptions: [];
      description: string;
      standardHours: {
        wednesday: string;
        monday: string;
        thursday: string;
        sunday: string;
        tuesday: string;
        friday: string;
        saturday: string;
      };
      name: string;
    }
  ];
  addresses: [
    {
      postalCode: string;
      city: string;
      stateCode: string;
      line1: string;
      type: string;
      line3: string;
      line2: string;
    }
  ];
  images: [
    {
      credit: string;
      title: string;
      altText: string;
      caption: string;
      url: string;
    }
  ];
  weatherInfo: string;
  name: string;
  designation: string;
}

const Park = (dataPark: dataParkProps[]) => {
  const [parkData, setParkData] = useState<dataParkProps[]>();

  return (
    <div className='main-container'>
      <Header />
      <div className='cards'> Card List</div>
    </div>
  );
};
export default Park;
