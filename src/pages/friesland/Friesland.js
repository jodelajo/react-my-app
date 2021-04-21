import React, { useContext } from 'react';
import {LocationContext} from "../../context/LocationContext";
import Counter from "../../components/counter/Counter";

function Friesland() {
    const {locationsWadden, locationsZuidOost, locationsNoordWest} = useContext(LocationContext)

    const frieslandLocations = locationsWadden.concat(locationsZuidOost).concat(locationsNoordWest).concat([])

    console.log('friesland', frieslandLocations)
    console.log('noordwest', locationsNoordWest)

    return <div>
        <h1>TOP 5 beste Plakjes</h1>
        <ul>
            {frieslandLocations && frieslandLocations.sort((a,b)=>
               b.totalPoints - a.totalPoints).slice(0,5)
                .map((location) => {
                return <Counter
                    key={location.locationID}
                    location={location}
                    clouds={location.locationClouds}
                    wind={location.locationWind}
                    temp={location.locationTemp}
                    totalPoints={location.totalPoints}
                />
            })}
        </ul>
    </div>
}

export default Friesland

