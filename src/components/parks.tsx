import React, { useEffect, useState } from "react";
import { mapStateToStateAbr } from "../utils/helper";
import Park, { dataParkProps } from "./park";

interface props {
  myState: string;
}

interface dataProps {
  total: string;
  limit: string;
  start: string;
  data: dataParkProps[];
}

const Parks = ({ myState }: props) => {
  const [parks, setParks] = useState<dataProps>();

  useEffect(() => {
    console.log(parks);
  }, [parks]);

  useEffect(() => {
    const stateAbrTemp = mapStateToStateAbr(myState);
    console.log(stateAbrTemp);
    if (stateAbrTemp && stateAbrTemp.length > 0) {
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${stateAbrTemp}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "VmV0oUk13fnvabsFnhcbOZuoxW2pFnCjTbNVbHYR",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => setParks(response));
    }
  }, []);

  return (
    <div>
      <h1>Total: {parks ? parks.total : null}</h1>
      {parks ? <Park {...parks.data} /> : null}
    </div>
  );
};

export default Parks;
