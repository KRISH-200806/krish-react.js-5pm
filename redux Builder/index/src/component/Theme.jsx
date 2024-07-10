import React from "react";
import { useDispatch } from "react-redux";
import { handletheme } from "../redux/action";

function Theme() {
    const dispatch = useDispatch();
    


  return (
    <div >
      <button
        onClick={() => dispatch(handletheme("light"))}
        
      >
        light
      </button>
      <button onClick={() => dispatch(handletheme("dark"))}>dark</button>
    </div>
  );
}

export default Theme;
