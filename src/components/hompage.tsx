import React, { useEffect, useRef, useState } from "react";
import Select from "react-dropdown-select";
import { Link, useNavigate } from "react-router-dom";
import "../scss/homepage.scss";
import { convertedStatesToJSONList } from "../utils/helper";
import Parks from "./parks";

function HomePage() {
  const options = convertedStatesToJSONList();

  const [state, setState] = useState({ value: "", label: "" });
  const [stateSelected, setStateSelected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.value) setStateSelected(true);
  }, [navigate, state]);

  return !stateSelected ? (
    <div className='main-box'>
      <h1>Discover America's Story: The National Parks</h1>
      <Select
        options={options}
        values={[]}
        onChange={(value) => setState(value[0])}
        className='select-dropdown'
        placeholder='Please select a state'
      />
    </div>
  ) : (
    <Parks myState={state.value} />
  );
}

export default HomePage;
