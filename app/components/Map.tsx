import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import * as d3 from "d3";
import * as topojson from "topojson-client";
import mapdata from "../../public/counties-10m.json"



export default async function Map ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  let [items, setItems] = useState([]);
  let [label, setLabel] = useState('');
  
  useEffect(() => {
    if (query == '') {
      return;
    }
    const lowerCaseSearchContent = query.toLowerCase();
    try {
      let temp = fetch('http://localhost:5050/cpt/search?search=' + lowerCaseSearchContent)
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
      });
    } catch {
      alert("failed to fetch");
    }
    console.log("map");
    
  }, [query]);

  return (
    <div>
    <div>Medicare Physician Fee Schedule Amount:</div>
    <div id="label" />
    <ComposableMap
      projection='geoAlbersUsa'
      fill='white'
      stroke='black'
      stroke-width={0.25}
      projectionConfig={{
        rotate: [97, -40, 0],
        scale: 800,
      }}
    >
      <Geographies geography={mapdata}>
        {(geographies: any) => {
          const colorScale = d3.scaleLinear()
          .range([d3.schemeBlues[5][0], d3.schemeBlues[5][4]])
          .domain(d3.extent(items.map(a => a["Facility Fee Schedule Amount"])));
          return geographies.geographies.map((geo: any) => {
            let cur;
            try {
              cur = items.find((s: any) =>  s.counties.counties.includes(geo.properties.name.toLowerCase()));
              if (!cur) {
                const longstate = mapdata.objects.states.geometries.find((s: any) => s.properties.code == geo.properties.state);
                if (longstate) {
                  cur = items.find((s: any) =>  s.counties.state == longstate.properties.name.toLowerCase()); 
                }
              }
            } catch {
              return <div>Search to display data</div>;
            } 
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur["Facility Fee Schedule Amount"] : 0)}
                  onMouseEnter={() => {
                    try {
                      document.getElementById("label").innerText = geo.properties.name + ": $" + String(cur["Facility Fee Schedule Amount"]);
                    } catch {}
                  }}
                />
              );
          });
        }}
      </Geographies>
    </ComposableMap>
    </div>
  );
};
