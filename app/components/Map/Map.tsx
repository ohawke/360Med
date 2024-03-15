import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantize } from "d3-scale";
import * as topojson from "topojson-client";
import mapdata from "../../../public/counties-10m.json"

const colorScale = scaleQuantize()
  .domain([1, 1000])
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
  let [items, setItems] = useState(data);
  
  useEffect(() => {
    setItems(data.data.data);
  }, [data]);

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
            let cur;
            try {
              cur = items.find((s: any) =>  s.counties.counties.includes(geo.properties.name.toLowerCase()));
              /*
              if (!cur) {
                const longstate = mapdata.objects.states((s: any) => s.properties.code == geo.properties.state).toLowerCase();
                cur = items.find((s: any) =>  s.counties.state == longstate);
              } */
            } catch {
              return <div>Search to display data</div>;
            } 
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