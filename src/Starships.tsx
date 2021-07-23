import React, { useEffect, useState } from 'react';
import StarshipsTable from './components/StarshipsTable';
import ManufacturerSelect from './components/ManufacturerSelect';
import "./Starships.css";
import { getStarships } from './services/starships';

function Starships() {
  const [starships, setStarships] = useState<any[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");

  useEffect(() => {
    getStarships()
      .then((data: any) => setStarships(data))
  })

  let manufacturers = starships
    .map(ship => ship.manufacturer.replace(", ", ",").split(","))
    .flat();
  manufacturers = ["", ...new Set(manufacturers)];

  const filteredShips = starships.filter(ship => ship.manufacturer.includes(selectedManufacturer));
  
  return (
    <div className="resourceContainer">
        <ManufacturerSelect value={selectedManufacturer} onChange={setSelectedManufacturer} options={manufacturers} />
        <StarshipsTable data={filteredShips} />
    </div>
  );
}

export default Starships;
