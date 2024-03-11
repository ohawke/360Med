import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from "d3-scale";
const mapdata = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 300])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

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
            //const cur = data.find((s: any) => s.counties.counties[0] === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  //fill={colorScale(cur ? cur["Facility Fee Schedule Amount"] : "#EEE")}
                />
              );
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;