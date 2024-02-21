import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
const mapdata = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const Map = (data: any) => {
  return (
    <ComposableMap
      projection='geoAlbersUsa'
      fill='white'
      stroke='black'
      stroke-width={1}
    >
      <Geographies geography={mapdata}>
        {(geographies: any) => {
          return geographies.geographies.map((geo: any) => {
            return <Geography key={geo.rsmKey} geography={geo} />;
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;