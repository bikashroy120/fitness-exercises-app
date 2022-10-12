import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {

    const coorrdinates = {lat:0, lng:0}

  return (
    <div>
          <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo" }}
        defaultCenter={coorrdinates}
        center={coorrdinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >
       
      </GoogleMapReact>
    </div>
  )
}

export default Map