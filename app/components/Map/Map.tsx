import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from "d3-scale";
const mapdata = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 2000])
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

const Map = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    let items = JSON.parse(sessionStorage.getItem("result") || '{}');
    setData(items);
  }, []);

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
            const cur = data.find((s: any) => s.counties.counties.includes(geo.properties.name.toLowerCase()));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur["Facility Fee Schedule Amount"] : 1)}
                />
              );
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;