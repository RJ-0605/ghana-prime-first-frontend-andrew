import { useState } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"

const MapBox = () => {
  const [viewport, setViewport] = useState({
    latitude: 5.5500,
    longitude: -0.2167,
    width: "100%",
    height: "100%",
    zoom: 10,
  });
  const [locationInfo, setLocationInfo] = useState(false);


  return (
    <div className="h-full">
      <ReactMapGL
      
        {...viewport}
        onViewportChange={vp => { setViewport(vp) }}
        // mapStyle="mapbox://styles/frankchoongsaeng/ckleqm8ax616d17pnk9siaye6"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiZnJhbmtjaG9vbmdzYWVuZyIsImEiOiJja2xlNW13b3kwNmlzMm9vaXB2Yzg3ajM4In0.RMNjKPrg9rst7GVmrhiMQg">

        <Marker longitude={-0.2167} latitude={5.5500}>
          <button
          style={{
            filter: locationInfo ? "grayscale(0)" : "grayscale(1)"
          }}
            className="h-5 w-5 outline-none border-none transform -translate-x-2/4 -translate-y-2/4 transition-all"
            onMouseOver={e => { e.preventDefault(); setLocationInfo(true) }}
            onMouseLeave={e => { e.preventDefault(); setLocationInfo(false) }}
          >
            <img className="" src="images/house_marker.png" />
          </button>
        </Marker>

        {locationInfo && (
          <Popup
            dynamicPosition={true}
            latitude={5.5500}
            longitude={-0.2167}
            onClose={() => setLocationInfo(false)}
            closeButton={false}
          >
            <div className="max-w-sm text-xs">
              <h2>This is some infomation</h2>
              <p>Some small information about the house you want</p>
              <i>click to view more</i>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  )
}

export default MapBox;